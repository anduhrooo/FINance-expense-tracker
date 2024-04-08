const router = require('express').Router();
const { Expense, User } = require('../models');

router.get('/expenses', async (req, res) => {
    try {
        const data = await Expense.findAll();
        const hbsData = data.map(expenseObj => expenseObj.toJSON());
        const userData = await User.findByPk(req.session.user.id);
        const hbsUser = userData.toJSON();
        res.render('expenses', {expenses:hbsData, user:hbsUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "error occurred", error });
    }
    // res.render('expenses');
});

router.get('/', async (reg, res) => {
    res.render('landing');
});

router.get('/login', async (reg, res) => {
    res.render('login');
});

router.get('/profile', async (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ msg: 'login first' });
    }
    const userData = await User.findByPk(req.session.user.id, {
        include: [Expense]});
    const hbsUser = userData.toJSON();
    hbsUser.loggedIn = req.session.loggedIn;
    res.render('profile', hbsUser);
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