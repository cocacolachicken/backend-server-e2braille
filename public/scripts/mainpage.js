var res = "";


window.onload = () => {
    console.log('hi');

    document.getElementById('translate-submit').addEventListener('click', async () => {
        document.getElementById('loader').style.display = 'flex';
        const request = await fetch ("/translate", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({translate : document.getElementById('tl-left').value})
        });

        res = await request.json();

        console.log(res);

        document.getElementById('tl-right').value = res;
        document.getElementById('loader').style.display = 'none';
    });

    document.getElementById('clear-button').addEventListener('click', () => {
        document.getElementById('tl-left').value = '';
    });

    document.getElementById('copy-text').addEventListener('click', async () => {
        await navigator.clipboard.writeText(res);
        window.alert('Text copied');
    });

    document.getElementById('download-text').addEventListener('click', async () => {
        document.getElementById('loader').style.display = 'flex';
        const request = await fetch ("/getPDF", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({translation : document.getElementById('tl-right').value})
        });

        let pdf = await request.blob();

        let pdfURL = URL.createObjectURL(pdf);
        window.open(pdfURL);

        document.getElementById('loader').style.display = 'none';
    });
};