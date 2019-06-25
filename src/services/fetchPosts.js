import { Post } from '../entities/Post'

export const fetchPosts = (token) => {
    return fetch(("http://book-api-dev.hypetech.xyz/posts"), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': 'Bearer ' + token
        },
    }


    )
        .then(response => response.json())
        .then(posts => {
            return posts.map((post, i) => {
                return new Post(post)
            })
        })
}