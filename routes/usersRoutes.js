const express = require("express");
const router = express.Router();
const {User} = require("../models");
const bcrypt = require('bcrypt')

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
router.get("/:id", async (req, res) => {
    try { const userData = await User.findByPk(req.params.id);
        const hbsUser = userData.toJSON();
        console.log(hbsUser);
        //RENDERS TO profile.handlebars, uses hbsUser object
        res.render('profile', hbsUser);
    } catch(err) {
        res.status(500).json({msg:"error occurred",err})
    };
});

// POST (CREATE)
router.post('/', (req, res) => {
// create a new User
User.create({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    income:req.body.income
}
).then(data=>{
    res.json(data)
})
});

//USER LOGIN
router.post("/login", async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where:{
                username:req.body.username
            }
        });
        if(!foundUser){
            return res.status(401).json({msg:'invalid user/password combination'})
        }
        if(!bcrypt.compareSync(req.body.password, foundUser.password)){
            return res.status(401).json({msg:'invalid user/password combination'})
        }
        //added session data to user login
        req.session.user = {
            id:foundUser.user_id,
            username:foundUser.username
        }
        return res.json(foundUser)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err });
    }
    });


//USER LOGOUT
router.post("/logout", (req, res) => {
    req.session.destroy();
    res.json({msg:"logged out"})
});

// DELETE
router.delete("/", (req, res) => {
User.destroy({
    where: {},
}).then((data) => {
    res.json(data);
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
});
}
);


// PUT (EDIT BY ID)
router.put("/:id", async (req, res) => {
    try {
        const data = await User.update(req.body, {
            where: {
                user_id: req.params.id,
            },
            individualHooks:true
        });
        if (data[0] === 0) {
            return res.status(404).json({ msg: "User does not exist!" });
        }
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "An error occurred", err });
    }
});


module.exports = router;