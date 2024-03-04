const clientId = '4f29f272f54f4d558a6e969123fe0fd0';
const clientSecret = 'ede8b285c0824849a2ce57a9189ec095';

export default async function getToken() {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}

console.log(getToken());