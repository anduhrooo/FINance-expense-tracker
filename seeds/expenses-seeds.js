const { Expense } = require('../models');

const expenseData = [
  {
    user_id: 1,
    category: 'Dining Out',
    amount: 10,
    description: 'In N Out'
  },
  {
    user_id: 1,
    category: 'Gas',
    amount: 100,
    description: 'Thanks, Obama'
  },
  {
    user_id: 1,
    category: 'Groceries',
    amount: 100,
    description: 'Trader Joes'
  },
  {
    user_id: 2,
    category: 'Utilities',
    amount: 80,
    description: 'Electricity Bill'
  },
  {
    user_id: 3,
    category: 'Rent',
    amount: 2000,
    description: 'Let me live, bro'
  },

];

const seedExpenses = () => Expense.bulkCreate(expenseData);

module.exports = seedExpenses;