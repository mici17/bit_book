import React from 'react'
import './SingleImagePost.css'


export const SingleImagePost = (props) => {
    const { post } = props
    return (
        <div className="singleImagePost-image">
            <img className="singleImagePost-img" src={post.imageUrl} alt="img" />
            <div className="imagePost-comments">
            </div>
        </div>
    )
}