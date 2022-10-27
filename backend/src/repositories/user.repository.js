const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../database");
const Users = require("../database/models/user.model");
const UsersSecrets = require("../database/models/user.secret.model");
const { DEFAULT_DB_APP_USER } = require("../database/config/config");
const ApiError = require("../utils/api-error");
const { APP_USER_TEST } = require("../../__test__/constants");

class UserRepository {
    /** 2022-10-07 At the state of art this function is used only for testing purpose */
    async create(
        email,
        password,
        options = {
            transaction: null,
            appUser: DEFAULT_DB_APP_USER
        }
    ) {
        const transaction = await sequelize.transaction();

        const usersWithEmail = await UsersSecrets.findAll({
            where: { email }
        });

        if (usersWithEmail.length > 0) {
            await transaction.rollback();
            throw new ApiError(400, "Email já cadastrado");
        }

        try {
            const newUserId = uuidv4();

            const userSecretsModel = await UsersSecrets.create({
                userId: newUserId,
                email,
                password,
                appUser: options.appUser
            });

            await Users.create({
                id: newUserId,
                userSecretId: userSecretsModel.id,
                appUser: options.appUser
            });

            await transaction.commit();

            return newUserId;
        } catch (err) {
            await transaction.rollback();

            throw new ApiError(err.statusCode || 500, err.message);
        }
    }

    async findById(id) {
        try {
            const userModel = await Users.cache().findByPk(id, {
                attributes: {
                    exclude: ["appUser", "createdAt", "updatedAt"]
                }
            });

            if (!userModel) {
                throw new ApiError(
                    404,
                    `Nenhum usere com o id: ${id} encontrado`
                );
            }

            const userSecrets = await UsersSecrets.cache().findByPk(
                userModel.userSecretId,
                {
                    attributes: {
                        exclude: ["id", "appUser", "createdAt", "updatedAt"]
                    }
                }
            );

            const user = {
                ...userModel.dataValues,
                email: userSecrets.email
            };

            delete user.userSecretId;

            return user;
        } catch (error) {
            const statusCode = Number(error?.statusCode) || 500;

            throw new ApiError(statusCode, error.message);
        }
    }

    /** 2022-10-07 At the state of art this function is used only for testing purpose */
    async findByEmail(email) {
        try {
            const userSecrets = await UsersSecrets.cache(
                `user:findByEmail:${email}`
            ).findOne({
                where: { email }
            });

            if (!userSecrets) {
                throw new ApiError(
                    404,
                    `Nenhum registro com o email: ${email}`
                );
            }

            const userModel = await Users.cache(
                `user:findByEmail:${userSecrets.id}`
            ).findOne({
                where: { userSecretId: userSecrets.id }
            });

            return {
                ...userModel.dataValues,
                email: userSecrets.email
            };
        } catch (error) {
            throw new ApiError(error?.statusCode || 500, error.message);
        }
    }

    /**
     * 2022-10-13 Used only in tests
     */
    async deleteTestRecords() {
        await Users.destroy({
            where: {
                appUser: APP_USER_TEST
            }
        });

        await UsersSecrets.destroy({
            where: {
                appUser: APP_USER_TEST
            }
        });
    }
}

module.exports = new UserRepository();
