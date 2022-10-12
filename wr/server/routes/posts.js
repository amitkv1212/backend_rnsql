const express = require('express'); //instance of express library 
const router = express.Router();// router is keywrd

const {posts} = require('../models')

//inside this we can write as many request as we want 

//get request or post request 

router.get('/',async (req, res)=>{
    const listoftables = await posts.findAll();
    res.json(listoftables);
}
);

router.post("/", async (req, res)=>{
    const post = req.body;
    await posts.create(post);
    res.json(posts);
});


module.exports = router;