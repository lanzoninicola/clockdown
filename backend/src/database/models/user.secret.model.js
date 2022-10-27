const { DataTypes } = require("sequelize");
const { sequelize } = require("../index.js");
const bcrypt = require("bcrypt");

const UserSecret = sequelize.define(
    "users_secrets",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        tokenGoogle: DataTypes.STRING,
        passwordResetToken: DataTypes.STRING,
        passwordResetExpires: DataTypes.DATE,
        appUser: {
            type: DataTypes.STRING(50),
            defaultValue: "do-chef",
            allowNull: true
        }
    },
    {
        hooks: {
            beforeCreate: async userSecret => {
                if (userSecret.password) {
                    userSecret.password = await bcrypt.hash(
                        userSecret.password,
                        12
                    );
                }
            },
            beforeUpdate: async userSecret => {
                if (userSecret.password) {
                    userSecret.password = await bcrypt.hash(
                        userSecret.password,
                        12
                    );
                }
            }
        }
    }
);

module.exports = UserSecret;
