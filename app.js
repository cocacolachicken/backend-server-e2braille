const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PDFDoc = require('pdfkit');
const BlobStream = require('blob-stream');


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
});

app.post('/getPDF', bodyParser.json(), async (req, res) => {
    console.log(req.body);

    const doc = new PDFDoc();
    const stream = doc.pipe(BlobStream());

    doc.font('Symbola.ttf').fontSize(24);

    let arr = req.body.translation.split('⠀');
    for (let word of arr) {
        doc.text(`${word}⠀`, {
            lineGap: 8,
            continued : true,
            letterSpacing: -5
        })
    }

    let blob;

    doc.end();
    await stream.on('finish', () => {
        blob = stream.toBlob('application/pdf');
        console.log(blob);
        res.type(blob.type);
        blob.arrayBuffer().then((buf) => {
            res.send(Buffer.from(buf))
            }
        )
    });
});

app.listen(port, () => {
    console.log('heyy');
})