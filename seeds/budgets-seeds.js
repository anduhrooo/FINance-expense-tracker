const { Budget } = require('../models');

const budgetData = [
  {
    user_id: 1,
    category_id: 1,
    amount: 100,
  },

];

const seedBudgets = () => Budget.bulkCreate(budgetData);

module.exports = seedBudgets;