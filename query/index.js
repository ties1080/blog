const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

posts === {
    'j123j42':{
        id : 'j123j42',
        title : 'Post title',
        comments:[
            { id : 'klj3kl', content : 'test comment'}
        ]
    },
    'j123j42':{
        id : 'j123j42',
        title : 'Post title',
        comments:[
            { id : 'klj3kl', content : 'test comment'}
        ]
    },
    'j123j42':{
        id : 'j123j42',
        title : 'Post title',
        comments:[
            { id : 'klj3kl', content : 'test comment'}
        ]
    },
    'j123j42':{
        id : 'j123j42',
        title : 'Post title',
        comments:[
            { id : 'klj3kl', content : 'test comment'}
        ]
    },
    'j123j42':{
        id : 'j123j42',
        title : 'Post title',
        comments:[
            { id : 'klj3kl', content : 'test comment'}
        ]
    },
}



app.get('/posts', (req,res)=>{
    res.send(posts);
})

app.post('/events', (req,res)=>{

    const {type, data } = req.body;

    if(type === 'PostCreated') {
        const {id, title} = data;
        posts[id]= {id, title, comments: []};
    }

    if(type === 'CommentCreated') {
        const {id, content, postId, status} = data;
        const post = posts[postId];
        post.comments.push({id, content, status})
    }

    console.log('Query posts', posts);

    res.send({});

})


app.listen(4002,() => {
    console.log('Query service listening on 4002');
})
