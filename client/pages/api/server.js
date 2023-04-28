const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./[routes]/users');
const decisionRoutes = require('./[routes]/decisions');
const cors = require('cors');
const env = require('dotenv');
const PORT = process.env.PORT || 5000;

env.config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "25mb" }));

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

app.use('/api/users', userRoutes);
app.use('/api/decisions', decisionRoutes);

const http = require('http');
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
    console.log('\x1b[36m%s\x1b[0m', 'Connected to MongoDB Database');
    console.log('Server listening on port ' + PORT);
  });