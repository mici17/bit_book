import React from 'react';
import { Link } from 'react-router-dom';
import './TextPost.css'
export const TextPost = (props) => {
    const { post } = props
    return (
        <Link to={`/post/${post.id}`}><div className="textPost-text">
            <article>{post.text}</article>
            <div className="textPost-comments">
                <p>{post.type} post</p>
                <p>Comments:{post.comments.length}</p>
            </div>
        </div>
        </Link>
    )
}