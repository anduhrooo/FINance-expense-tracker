const router = require('express').Router();

const userRoutes = require('./usersRoutes');
router.use('/users', userRoutes);

const expensesRoutes = require('./expensesRoutes')
router.use('/expenses', expensesRoutes)

router.get('/', async (req, res) => {
    res.render('expenses');
})

module.exports = router;