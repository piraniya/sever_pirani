const express = require('express');
//node js module express pantrathu
const router = express.Router()
//handling http request
module.exports = router;
// export pantra module uses other file
const Model = require('../model/model');// require file path model connect

//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})
// a POST request is a way for a web browser or client to send data to a web server. It's often used when you want to submit information to the server, such as when filling out a form on a website,



//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

