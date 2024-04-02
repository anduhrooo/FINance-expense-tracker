const { Expense } = require('../models');

const expenseData = [
  {
    user_id: 1,
    category: 'Dining Out',
    amount: 10,
    description: 'In N Out'
  },

];

const seedExpenses = () => Expense.bulkCreate(expenseData);

module.exports = seedExpenses;