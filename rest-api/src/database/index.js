const { Sequelize } = require("sequelize");

const config = require("./config/config");
const sequelize = new Sequelize(config);

const initDatabase = async options => {


    await sequelize.sync(options);

  
};

module.exports = {
    sequelize,
    initDatabase
    }