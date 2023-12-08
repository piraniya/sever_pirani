const mongoose = require('mongoose');
//This model can be used to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB collection with the specified data structure.

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})
//Mongoose library, making it available for use in the code.
//A schema in Mongoose defines the structure of the documents (data objects) that will be stored in a MongoDB collection.
module.exports = mongoose.model('Data', dataSchema)


const express = require('express');
const router = express.Router();

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;





