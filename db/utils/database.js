const Sequelize = require('sequelize');
const sequilize = new Sequelize('csv-data', 'root', 'sunnykumar@12', {
	dialect: 'mysql',
	host: 'localhost'
});
module.exports = sequilize;
