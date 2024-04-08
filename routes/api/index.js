const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const expenseRoutes = require('./expensesRoutes');

router.use('/users', userRoutes);
router.use('/expenses', expenseRoutes);

module.exports = router;
