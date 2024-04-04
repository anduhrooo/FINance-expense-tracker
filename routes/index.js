const router = require('express').Router();

const userRoutes = require('./usersRoutes');
router.use('/users', userRoutes);

const expensesRoutes = require('./expensesRoutes')
router.use('/expenses', expensesRoutes)

module.exports = router;