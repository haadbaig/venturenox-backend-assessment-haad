const { Sequelize } = require('sequelize');
const envVars = require('../config/common_env_vars');

require('dotenv').config();

const sequelize = new Sequelize(envVars.POSTGRES_DATABASE, envVars.POSTGRES_USERNAME, envVars.POSTGRES_PASSWORD, {
	host: envVars.POSTGRES_HOST, // or your PostgreSQL host
	dialect: 'postgres',
	define: {
		freezeTableName: true
	}
});

module.exports = sequelize;