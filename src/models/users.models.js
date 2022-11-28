const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    first_name:{
        type:DataTypes.STRING
    },
    last_name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    },
    birthday:{
        type:DataTypes.DATE
    }
})


module.exports= Users