
let m = async () => {
    let res = await fetch('https://api-english2braille.onrender.com/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify({translate : 'mom'})
    })

    console.log(await res.json());
}

m();