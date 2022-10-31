const { DataTypes } = require("sequelize");
const { sequelize } = require("../index.js");
const UserSecret = require("./user.secret.model.js");

const Users = sequelize.define("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    documentNumber: DataTypes.STRING,
    userSecretId: DataTypes.UUID,
    appUser: {
        type: DataTypes.STRING(50),
        defaultValue: "clockdown",
        allowNull: true
    }
});

Users.belongsTo(UserSecret, {
    foreignKey: { allowNull: false, name: "userSecretId" },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

module.exports = Users;
