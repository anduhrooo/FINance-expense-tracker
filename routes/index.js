const router = require('express').Router();

const categoryRoutes = require('./categoryRoutes');
router.use('/categories', categoryRoutes);

const userRoutes = require('./usersRoutes');
router.use('/users', userRoutes);

const expensesRoutes = require('./expensesRoutes')
router.use('/expenses', expensesRoutes)

const budgetsRoutes = require('./budgetsRoutes')
router.use('/budgets', budgetsRoutes)

module.exports = router;