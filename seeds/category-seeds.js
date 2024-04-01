const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Dining Out',
  },
  {
    category_name: 'Groceries',
  },
  {
    category_name: 'Gas',
  },
  {
    category_name: 'Gym Membership',
  },
  {
    category_name: 'Utilities',
  },
  {
    category_name: 'Rent',
  },
  {
    category_name: 'Entertainment',
  },
  {
    category_name: 'Savings',
  },
  {
    category_name: 'Misc',
  },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;