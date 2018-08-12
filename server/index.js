const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// RoutesFile
const contactroutes = require("./routes/contact-routes");

mongoose.connect("mongodb://localhost:27017/contacts", { useNewUrlParser: true })
.then(() => console.log('Connected'))
.catch(err => console.log(err.message))

const app = express();

//Middleware
app.use(bodyParser.json())

//Routes Middleware
app.use("/contact", contactroutes)


//Port
const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Listen to the port of ${port}`))