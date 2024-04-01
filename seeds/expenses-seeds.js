const { Expense } = require('../models');

const expenseData = [
  {
    user_id: 1,
    category_id: 1,
    amount: 10,
    description: 'in n out'
  },

];

const seedExpenses = () => Expense.bulkCreate(expenseData);

module.exports = seedExpenses;