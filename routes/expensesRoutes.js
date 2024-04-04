const express = require("express");
const router = express.Router();
const {Expense} = require("../models");

// GET ALL
router.get("/", async (req, res) => {
try {
    const data = await Expense.findAll();
    
    
    const expenses = data.map(function(expenseObj){
        return expenseObj.toJSON()
    })
    console.log(expenses)
    // res.json(data);
    res.render('landing', {expenses:expenses})
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
router.post('/', (req, res) => {
// create a new Expense
Expense.create({
    user_id:req.body.user_id,
    category:req.body.category,
    amount:req.body.amount,
    description:req.body.description,
}
).then(data=>{
    res.json(data)
})
});

// DELETE
router.delete("/:id", (req, res) => {
Expense.destroy({
    where: {
    expense_id: req.params.id,
    },
}).then((data) => {
    if(data===0){
    return res.status(404).json({msg:"does not exist!"})
    }
    res.json(data);
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
});
});

// PUT (EDIT BY ID)
router.put("/:id", (req, res) => {
Expense.update(req.body, {
    where: {
    expense_id: req.params.id,
    },
}).then((data) => {
    if(data[0]===0){
    return res.status(404).json({msg:"does not exist!"})
    }
    res.json(data);
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
});
});

module.exports = router;