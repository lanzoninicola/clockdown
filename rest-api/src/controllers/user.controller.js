const { formatContent } = require("../utils");
const { sequelize } = require("../database");
const Users = require("../database/models/user.model");
const userRepository = require("../repositories/user.repository");
const isValidHttpStatusCode = require("../utils/is-valid-http-status-code");
const httpStatus = require("http-status");

exports.findById = async (req, res, next) => {
    const userId = req.params.id;
    try {
        const user = await userRepository.findById(userId);

        return res.status(200).json(user);
    } catch (e) {
        const httpStatusCode = isValidHttpStatusCode(e?.statusCode)
            ? e?.statusCode
            : httpStatus.INTERNAL_SERVER_ERROR;

        return res.status(httpStatusCode).json({
            message: e?.message
        });
    }
};

exports.update = async (req, res, next) => {
    const transaction = await sequelize.transaction();

    try {
        const value = await Users.cache().findByPk(req.params.id);

        if (value) {
            await value
                .cache()
                .update(formatContent(req.body, Users.getAttributes()));
            await Users.cache("user-update").clear();

            await transaction.commit();
            return res.status(200).json({
                message: `Registro com o id: ${req.params.id} atualizado com sucesso`
            });
        } else {
            return next(
                new Error(
                    `Nenhum registro com o id: ${req.params.id} encontrado`
                )
            );
        }
    } catch (e) {
        await transaction.rollback();

        const httpStatusCode = isValidHttpStatusCode(e?.statusCode)
            ? e?.statusCode
            : httpStatus.INTERNAL_SERVER_ERROR;

        return res.status(httpStatusCode).json({
            message: e?.message
        });
    }
};
