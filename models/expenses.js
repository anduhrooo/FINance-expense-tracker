const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Expense extends Model {}

Expense.init(
  {
    expense_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  category:{
    type: DataTypes.ENUM('Dining Out', 'Groceries', 'Gas', 'Subscriptions', 'Utilities', 'Rent', 'Entertainment', 'Savings', 'Misc'),
    allowNull: false
  },
    amount: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize
  }
);

module.exports = Expense;
