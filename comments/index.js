const express = require('express');
const { randomBytes } = require('crypto');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const commentsPostId = {}

app.get('/posts/:id/comments', (req, res)=>{

})

app.post('/posts/:id/comments', (req,res)=>{

})


app.listen(4001, ()=>{
    console.log('Comment service listening on 4001');
})
