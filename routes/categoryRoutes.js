const express = require("express");
const router = express.Router();
const {Category} = require("../models");

// GET ALL
router.get("/", async (req, res) => {
try {
    const data = await Category.findAll();
    res.json(data);
} catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
}
});

// GET BY ID
router.get("/:id", (req, res) => {
Category.findByPk(req.params.category_id).then((data) => {
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
// create a new category
Category.create({
    category_name:req.body.category_name
}
).then(data=>{
    res.json(data)
})
});

// DELETE
router.delete("/:id", (req, res) => {
Category.destroy({
    where: {
    id: req.params.category_id,
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
Category.update(req.body, {
    where: {
    id: req.params.category_id,
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