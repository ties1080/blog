const express = require('express');
const { randomBytes } = require('crypto');

const axios = require('axios');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts',  async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {id, title};
    try {
        await axios.post('http://localhost:4005/events', {
            type:'PostCreated',
            data: { id, title }
        });

        res.status(201).send(posts[id]);
    } catch (e) {
        res.status(500).send({message: e.toString()})
    }
});


app.post('/events', (req,res)=>{
    const event = req.body;
    console.log('Received Event on Post =>', event.type)
    res.status(201).send({});
})

app.listen(4000,() => {
    console.log('Post service listening on 4000');
});
