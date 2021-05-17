const express = require('express');
const cors = require('cors');
const dbConn = require('./dbConnection');
const appInfoRouter = require('./router/AppInfoRouter');

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World.')
});

app.use('/appInfo', appInfoRouter);

dbConn.on('error', (err) => {
    console.log('Error in connecting.');
})

app.listen((port), () => {
    console.log(`listening to: ${port}`)
});