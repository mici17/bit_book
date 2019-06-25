import { Post } from '../entities/Post'

export const fetchPosts = () => {
    return fetch((`https://book-api.hypetech.xyz/v1/posts`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`
        },
    }


    )
        .then(response => response.json())
        .then(posts => {
            return posts.map((post) => {
                return new Post(post)
            })
        })
}