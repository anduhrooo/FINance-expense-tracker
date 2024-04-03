const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlphanumeric:true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[8],
      }
    },
    income: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    hooks:{
      beforeCreate:userObj=>{
        userObj.password = bcrypt.hashSync(userObj.password, 3)
        return userObj
      },
      beforeUpdate:userObj=>{
        userObj.password = bcrypt.hashSync(userObj.password, 3)
        return userObj
      }
    }
  }
);

module.exports = User;