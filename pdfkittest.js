const PDFDoc = require('pdfkit');
const fs = require('fs');

function createBraillePDF (s) {
    if (typeof s == 'string') {

        const pdf = new PDFDoc({size:'LETTER'});

        pdf.pipe(fs.createWriteStream('output.pdf'));

        pdf.font('Symbola.ttf').fontSize(24);

        let arr = s.split('⠀');
        for (let word of arr) {
            pdf.text(`${word}⠀`, {
                lineGap: 8,
                continued : true,
                letterSpacing: -5
            })
        }

        pdf.end();
        console.log(s);
    }
}


createBraillePDF('⠏⠁⠎⠁⠙⠢⠁⠀⠛⠕⠞⠀⠍⠑⠀⠎⠬⠬⠀⠙⠕⠕⠀⠙⠀⠙⠀⠙⠕⠕⠀⠙');