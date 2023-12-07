
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  

  app.listen(3000,()=>{
    console.log('sever started on port 3000');
});

app.post('/resources', (req, res) => {
    const { name } = req.body;
    // Create new resource with provided name
    res.status(201).json({ message: `Created resource with name ${name}` });
  });

//   app.post('/resources', (req, res) => {
//     const { name } = req.body;
//     // Create new resource with provided name
//     res.status(201).json({ message: `Created resource with name ${name}` });
//   });

// app.put('/resources/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     // Update resource with provided ID and name
//     res.json({ message: `Updated resource with ID ${id} and name ${name}` });
//   });

