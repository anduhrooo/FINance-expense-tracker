const seedUsers = require('./users-seeds');
const seedCategories = require('./category-seeds');
const seedBudgets = require('./budgets-seeds');
const seedExpenses = require('./expenses-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
  
    await seedBudgets();
    console.log('\n----- BUDGETS SEEDED -----\n');
  
    await seedExpenses();
    console.log('\n----- EXPENSES SEEDED -----\n');
  
    process.exit(0);
  };

seedAll();