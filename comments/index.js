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

app.post('/posts/:id/comments', async (req,res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsPostId[req.params.id] || []

    comments.push({id: commentId, content});

    commentsPostId[req.params.id] = comments;

    await axios.post('https://localhost:4005/events', {
        type:'CommentCreated',
        data: {
            id: commentId,
            content,
            postId:req.params.id,
        }
    });

    res.status(201).send(comments);
})


app.listen(4001, () => {
    console.log('Comment service listening on 4001');
})
