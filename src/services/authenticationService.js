
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
        .then(response => {
            const invalidStatuses = [401, 403, 422]
            if (invalidStatuses.includes(response.status)) {
                return Promise.reject("Unable to login");
            }

            return response.json();
        })
        .then((data) => {
            localStorage.setItem('loginToken', data.accessToken)
            return data;
        })
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
        .then(response => {
            const invalidStatuses = [401, 403, 422]
            if (invalidStatuses.includes(response.status)) {
                return Promise.reject("Unable to register");
            }

            return response.json();
        })
        .then((data) => {
            localStorage.setItem('registerToken', data.accessToken)
            return data;
        })


}

export {
    authenticationLogIn,
    authenticationRegister
}