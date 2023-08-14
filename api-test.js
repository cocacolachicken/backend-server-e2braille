
let m = async () => {
    let res = await fetch('http://127.0.0.1:5000/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify({translate : 'SOMEONE'})
    })

    console.log(await res.json());
}

m();