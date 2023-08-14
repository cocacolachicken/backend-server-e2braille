var res = "";


window.onload = async () => {
    console.log('hi');

    document.getElementById('translate-submit').addEventListener('click', async () => {
        document.getElementById('loader').style.display = 'flex';
        let url = '/translate';
        if (selectedBraille) url = '/translate1';

        const request = await fetch (url, {
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

    document.getElementById('copy-link').addEventListener('click', () => {
        navigator.clipboard.writeText(`${window.location.origin}?text=${document.getElementById('tl-left').value}`);
    });

    if (window.location.href.includes('?')) {
        let params = new URLSearchParams(window.location.href.substring(window.location.href.indexOf('?')));
        document.getElementById('tl-left').innerText = params.get('text');

        document.getElementById('loader').style.display = 'flex';
        let url = '/translate';
        if (selectedBraille) url = '/translate1';

        const request = await fetch (url, {
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
    }
};