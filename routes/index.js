const router = require('express').Router();
const {Expense, User} = require("../models");

const userRoutes = require('./usersRoutes');
router.use('/usersDB', userRoutes);

const expensesRoutes = require('./expensesRoutes')
router.use('/expensesDB', expensesRoutes)

router.get('/expenses', async (reg, res) => {
    const dataExpense = await Expense.findAll();
    const expenses = dataExpense.map(function(expenseObj){
        return expenseObj.toJSON()
    })
    

    const dataUser = await User.findAll();
    const user = dataUser.map(function(userObj){
        return userObj.toJSON()
    })
    
    res.render('expenses', {expenses:expenses});
    // console.log(expenses);
    // console.log(user);
});

router.get('/', async (reg, res) => {
    res.render('landing');
});

router.get('/login', async (reg, res) => {
    res.render('login');
});

router.get('/profile', async (reg, res) => {
    res.render('profile');
});

router.get('/sessiondata', (req, res)=>{
    res.json(req.session)
})

router.get('/protecc', (req,res)=>{
    if(!req.session.user){
        return res.status(403).json({msg:'login first'})
    }
    res.send('welcome')
})

module.exports = router;