const express = require("express");
const router = express.Router();
const {Expense} = require("../../models");

router.get("/", async (req, res) => {

try {
    const data = await Expense.findAll();
    
    
    const expenses = data.map(function(expenseObj){
        return expenseObj.toJSON()
    })
    console.log(expenses)
    res.json(data);
    // res.render('landing', {expenses:expenses})
} catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
}
});


// GET BY ID
router.get("/:id", (req, res) => {
Expense.findByPk(req.params.id).then((data) => {
    if(data==null){
    return res.status(404).json({msg:"does not exist!"})
    }
    // res.render('expenses')
    res.json(data);
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
});;
});

// POST (CREATE)
router.post('/', async (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ msg: 'login first' });
    }

    try {
        const data = await Expense.create({
            user_id: req.session.user.id,
            category: req.body.category,
            amount: req.body.amount,
            description: req.body.description,
        });
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
    }
});

//TODO: does not block user from editing other user's expenses
// // PUT (EDIT BY ID)

router.put('/:id', async (req, res) => {
    try {
        const updateExpense = await Expense.findByPk(req.params.id);
        if(updateExpense.user_id!==req.session.user.id){
            return res.status(403).json({msg:"not your expense!"})
        }
        const data = await Expense.update(req.body, {
            where: {
                expense_id: req.params.id,
            },
        });
        if (data[0] === 0) {
            return res.status(404).json({ msg: "does not exist!" });
        }
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
    }
}
);

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        const deleteExpense = await Expense.findByPk(req.params.id);
        if(deleteExpense.user_id!==req.session.user.id){
            return res.status(403).json({msg:"not your expense!"})
        }
        const data = await Expense.destroy({
            where: {
                expense_id: req.params.id,
            },
        });
        if (data === 0) {
            return res.status(404).json({ msg: "does not exist!" });
        }
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
    }
}
);

module.exports = router;