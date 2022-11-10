const express = require('express'); // common.js modules on server side.
// import express from 'express'; // ES2015 statdarad -  Node.js does not have this support
const app = express(); // Inside a single node.js we can have multiple instances of express app.

app.get('/', (req, res) => {
    res.send();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);


