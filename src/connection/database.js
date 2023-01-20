const Sequelize = require('sequelize')
const config = require('../../config/config.json')

const dbConfig = config[process.env.NODE_ENV]
console.log('DB CON',process.env.NODE_ENV)

const sequelize = new Sequelize(dbConfig)

module.exports = sequelize