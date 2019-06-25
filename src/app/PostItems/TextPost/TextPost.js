import React from 'react'
import './TextPost.css'
export const TextPost = (props) => {
    const { post } = props
    return (
        <div className="textPost-text">
            <p>{post.text}</p>
        </div>
    )
}