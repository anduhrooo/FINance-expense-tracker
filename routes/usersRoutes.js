const express = require("express");
const router = express.Router();
const {User} = require("../models");

// GET ALL
router.get("/", async (req, res) => {
try {
    const data = await User.findAll();
    res.json(data);
} catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
}
});

// GET BY ID
router.get("/:id", (req, res) => {
User.findByPk(req.params.id).then((data) => {
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
// create a new User
User.create({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    password:req.body.password,
}
).then(data=>{
    res.json(data)
})
});

// DELETE
router.delete("/:id", (req, res) => {
User.destroy({
    where: {
    user_id: req.params.id,
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
//TODO: does not edit yet
router.put("/:id", (req, res) => {
User.update(req.body, {
    where: {
    user_id: req.params.id,
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