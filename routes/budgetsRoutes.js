const express = require("express");
const router = express.Router();
const {Budget} = require("../models");

// GET ALL
router.get("/", async (req, res) => {
try {
    const data = await Budget.findAll();
    res.json(data);
} catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
}
});

// GET BY ID
router.get("/:id", (req, res) => {
Budget.findByPk(req.params.budget_id).then((data) => {
    if(data==null){
    return res.status(404).json({msg:"does not exist!"})
    }
    res.json(data);
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
});;
});

// POST (CREATE)
router.post('/', (req, res) => {
// create a new Budget
Budget.create({
    user_id:req.body.user_id,
    category_id:req.body.category_id,
    amount:req.body.amount,
}
).then(data=>{
    res.json(data)
})
});

// DELETE
router.delete("/:id", (req, res) => {
Budget.destroy({
    where: {
    id: req.params.budget_id,
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
Budget.update(req.body, {
    where: {
    id: req.params.budget_id,
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