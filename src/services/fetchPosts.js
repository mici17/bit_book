import React from 'react';

export const fetchPosts = () => {
    return fetch("http://book-api-dev.hypetech.xyz/posts")
        .then(response => response.json())
        .then(response => console.log(response))

}