const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');



const app = express();
app.use(bodyParser.json())


app.post('/events',  (req, res) => {
     const event = req.body;
     console.log("Event-bus events ", event);
     axios.post('http://localhost:4000/events', event);
     axios.post('http://localhost:4001/events', event);
     axios.post('http://localhost:4002/events', event);
     axios.post('http://localhost:4003/events', event);

    res.send( { status : 'Events sended Successfully', event } );
})


app.listen(4005, () => {
    console.log("Event-bus service listening on 4005");
})
