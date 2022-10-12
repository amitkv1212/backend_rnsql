const express = require('express');
const app = express();

app.use(express.json());

const db=require('./models');

//router
const routeruse = require('./routes/posts');
//to make this work or apply this ..
app.use("/posts", routeruse);


db.sequelize.sync().then(()=>{
    app.listen(3001, () =>{
        console.log("yoo it is live on 3001");
    });
});

