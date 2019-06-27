import React from 'react';
import { Link } from 'react-router-dom';
import './VideoPost.css'

export const VideoPost = (props) => {
    const { post } = props
    return (
        <Link to={`/post/${post.id}`}><div className="videoPost-player">
            <iframe id="existing-iframe-example" title="video"
                width="500" height="800"
                src={`${post.videoUrl}`}
                frameBorder="0"
            ></iframe>
            <div className="videoPost-comments">
                <p className="videoPost-postType">{post.type} post</p>
                <p>Comments:{post.comments.length}</p>

            </div>
        </div>
        </Link>
    )
}