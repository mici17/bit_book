import { Comments } from '../entities/Comments'

export const fetchComments = (postId) => {
    return fetch((`https://book-api.hypetech.xyz/v1/posts/${postId}/comments`), {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`

        }
    })
        .then(response => response.json())
        .then(comments => {
            return comments.map(comment =>
                new Comments(comment))
        })
}


export const fetchSingleUserCommentsNumber = (userId) => {
    return fetch((`https://book-api.hypetech.xyz/v1/users/${userId}/comments?_limit=0`), {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${localStorage.getItem("loginToken")}`

        }
    })
        .then(response => response.headers.get("x-total-count"))

}