import {
    User
} from '../entities/User';

export const fetchUsers = () => {
    return fetch((`https://book-api.hypetech.xyz/v1/users`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`
        },
    }


    )
        .then(response => response.json())
        .then(users => {
            return users.map(user =>
                new User(user))
        })

}

export const fetchSingleUser = (userId) => {
    return fetch((`https://book-api.hypetech.xyz/v1/users/${userId}`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`
        },
    }


    )
        .then(response => response.json())
        .then(user => {
            return new User(user)
        })

}