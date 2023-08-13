let res = "";


window.onload = () => {
    document.getElementById('submit').addEventListener('click', async () => {
        const request = await fetch ("/translate", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({translate : document.getElementById('translate-text').value})
        });

        res = await request.json();

        console.log(res);

        document.getElementById('result').value = res;

    });
};