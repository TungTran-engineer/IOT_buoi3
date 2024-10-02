const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://tunglatoi2004:tunglatoi2004tunglatoi2004@cluster0.bcxt9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  });
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

const locationRoute = require('./api/routes/location.route');
app.use("/v1/api/location", locationRoute);

app.listen(process.env.PORT)