const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const {raw} = require("express");

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/events', async (req,res)=>{

    const {type, data} = req.body;

    if(type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected':'approved';

        await axios.post('http://localhost:4005/events',{
            type:'CommentModerated',
            data: {
                 status,
                ...data
            }
        });

    }
})


app.listen(4003,()=>{
    console.log('Moderation Service Listening on 4003');
})
