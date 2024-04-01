const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Budget extends Model {}

Budget.init(
  {
    budget_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
    }
  },
  {
    sequelize
  }
);

module.exports = Budget;