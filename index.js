const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000
const travelPlace = require('./travel-place-data.json')
const travelRooms = require('./travel-rooms-data.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send("Travel is running")
})
app.get('/travelPlace', (req, res) => {
    res.send(travelPlace)
})
app.get('/travelPlace/:id', (req, res) => {
    const id = req.params.id;
    const place = travelPlace.find(data => data.place === id);
    res.send(place)
})
app.get('/travelRooms', (req, res) => {
    res.send(travelRooms)
})
app.get('/travelRooms/:id', (req, res) => {
    const id = req.params.id;
    const place = travelRooms.find(data => data._id === id);
    res.send(place)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})