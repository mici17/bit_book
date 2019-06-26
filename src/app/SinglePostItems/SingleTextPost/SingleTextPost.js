import React from 'react';
import './SingleTextPost.css'
export const SingleTextPost = (props) => {
    const { post } = props
    return (
        <div className="singleTextPost-text-holder">
            <article className="singleTextPost-text">{post.text}</article>
            <div className="textPost-comments">
            </div>
        </div>
    )
}