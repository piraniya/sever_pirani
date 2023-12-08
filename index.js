//.env into the process.env object. This is done to keep sensitive information, like database connection strings, 
//outside of the codebase.


require('dotenv').config();

const express = require('express');
//use simplicity and minimalisim,Middleware,Routing,HTTP utility Methods,Template Engines,
//imports the express and mongoose modules, which are used for building web applications and interacting with MongoDB databases, 

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
//This line retrieves the MongoDB connection string from the environment variables. The actual value would be stored in the .env file.


mongoose.connect(mongoString);
const database = mongoose.connection;
//mongoose.connect to establish a connection to the MongoDB database using the connection string. The mongoose.connection object is assigned to the database variable for further event handling.

database.on('error', (error) => {
    console.log(error)
})
//This sets up an event listener for database connection errors. If an error occurs during the database connection, it will be logged to the console.

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
// This line creates an instance of the Express application, which will be used to define routes and handle HTTP requests.
app.use(express.json());
//json data request body json data in data post and put requests

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
//  starts the Express application and makes it listen for incoming HTTP requests on port 3000. The callback function logs a message to the console once the server is successfully started.




const routes = require('./routes/routes');
app.use('/api', routes)

//This line imports the routes from the routes/routes file and uses them under the '/api' path. It associates the routes defined in the imported file with this specific path in the applicatio.



