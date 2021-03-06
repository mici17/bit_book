import { Post } from '../entities/Post';
import jwtDecode from 'jwt-decode';

const loadId = () => {
    const decoded = jwtDecode(localStorage.getItem("loginToken"));
    console.log(decoded);
    return decoded.id;
}

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


export const fetchSingleUserPostsNumber = (userId) => {
    return fetch((`https://book-api.hypetech.xyz/v1/users/${userId}/posts?_limit=0`), {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`

        }
    })
        .then(response => response.headers.get("x-total-count"))

}


export const fetchProfileUserPostsNumber = () => {
    return fetch((`https://book-api.hypetech.xyz/v1/users/${loadId()}/posts?_limit=0`), {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`

        }
    })
        .then(response => response.headers.get("x-total-count"))

}




