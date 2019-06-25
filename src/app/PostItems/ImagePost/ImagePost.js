import React from 'react'
import './ImagePost.css'
export const ImagePost = (props) => {
    const { post } = props
    return (
        <div className="imagePost-image">
            <img src={post.imageUrl} />
            <div className="imagePost-comments">
                <p>Comments:{post.comments.length}</p>
            </div>
        </div>
    )
}