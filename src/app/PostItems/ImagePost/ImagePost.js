import React from 'react'
import { Link } from 'react-router-dom'
import './ImagePost.css'
export const ImagePost = (props) => {
    const { post } = props
    return (
        <Link to={`/post/${post.id}`}><div className="imagePost-image">
            <img src={post.imageUrl} alt="img" />
            <div className="imagePost-comments">
                <p>{post.type} post</p>
                <p>Comments:{post.comments.length}</p>
            </div>
        </div>
        </Link>
    )
}