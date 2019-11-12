const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
//product12 table name
const Product = sequelize.define('data', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	Year: Sequelize.STRING,
	Industry_aggregation_NZSIOC: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Industry_code_NZSIOC: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Industry_name_NZSIOC: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Units: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Variable_code: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Variable_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Variable_category: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Value: {
		type: Sequelize.STRING,
		allowNull: false
	},
	Industry_code_ANZSIC06: {
		type: Sequelize.STRING,
		allowNull: false
	},

});
module.exports = Product;
