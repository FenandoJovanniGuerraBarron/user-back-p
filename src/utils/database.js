const {Sequelize} = require('sequelize') 

const db = new Sequelize({
    dialect : 'postgres',
    host:'localhost',
    database:'users-db',
    username:'postgres',
    password:'pass',
    port:5433
})




module.exports = db