
const authenticationLogIn = (email, password) => {
    return fetch(('https://book-api.hypetech.xyz/v1/auth/login'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then((response) => response.json())
}


const authenticationRegister = (name, email, password) => {
    return fetch(('https://book-api.hypetech.xyz/v1/auth/register'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })

    })
        .then((response) => response.json())

}

export {
    authenticationLogIn,
    authenticationRegister
}