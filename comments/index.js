const express = require('express');
const { randomBytes } = require('crypto');

const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsPostId = {}

app.get('/posts/:id/comments', (req, res) => {
    res.status(201).send(commentsPostId[req.params.id] || [])
})

app.post('/posts/:id/comments',  async(req,res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsPostId[req.params.id] || []

    comments.push({id: commentId, content});

    commentsPostId[req.params.id] = comments;

    try{
        await axios.post('http://localhost:4005/events', {
            type:'CommentCreated',
            data: {
                id: commentId,
                content,
                postId:req.params.id,
            }
        });

        res.status(201).send(comments);
    }catch (e){
        res.status(500).send({message: e.toString()})
    }
})

app.post('/events', (req,res)=>{
    const event = req.body;
    console.log('Received Event on Comment =>', event.type)
    res.status(201).send({});
})


app.listen(4001, () => {
    console.log('Comment service listening on 4001');
})
