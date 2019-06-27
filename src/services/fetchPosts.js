import { Post } from '../entities/Post'

export const fetchPosts = () => {
    return fetch((`https://book-api.hypetech.xyz/v1/posts?_embed=comments`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`
        },
    }


    )
        .then(response => response.json())
        .then(data => {
            const posts = data.map((post) => {
                const comments = post.comments.map((comment) => {
                    return new Comment(comment)
                })
                return new Post(post, comments)
            })
            return posts
        })
}

export const fetchSinglePost = (postId) => {
    return fetch((`https://book-api.hypetech.xyz/v1/posts/${postId}`), {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`

        }
    })
        .then(response => response.json())
        .then(post => {
            return new Post(post)
        })
}