const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('expenses');
})

module.exports = router;
// res.render
// res.get