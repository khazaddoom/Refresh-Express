const express = require('express');

const myApp = express();

myApp.get('/', function(req, res) {
    res.send(`
    <h1>Welcome to a test app...</h1>
    <form method="POST" action="/getRepos">
        <label for="username">Enter your name</label>
        <input type="text" id="username">
        <button type="Submit">Get Data</button>
    </form>
    `);
});

myApp.post('/getRepos', function(req, res) {

    res.send(`
    <h1>Coming Soon...</h1>
    `)

});

myApp.listen(3000);