const sequelize = require('sequelize')

const connection = new sequelize('guiaperguntas','root','Rah202!!',{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection