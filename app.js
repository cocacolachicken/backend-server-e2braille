const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/files/main.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/files/about.html'));
})

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, '/files/team.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/files/contact.html'));
})

app.get('/main', (req, res) => {
    res.redirect('/');
})


app.post('/translate', bodyParser.json(), (req, res) => {
    console.log(req.body);
    res.json("⠠⠔⠀⠠⠏⠁⠎⠁⠙⠢⠁⠀⠎⠬⠔⠄⠂⠀⠦⠠⠙⠂⠀⠙⠤⠙⠤⠙⠂⠀⠙⠴");
})

app.listen(port, () => {
    console.log('heyy');
})