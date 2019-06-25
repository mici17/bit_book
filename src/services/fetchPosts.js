import { Post } from '../entities/Post'

export const fetchPosts = () => {
    return fetch("http://book-api-dev.hypetech.xyz/posts")
        .then(response => response.json())
        .then(posts => {
            return posts.map((post, i) => {
                return new Post(post)
            })
        })
}