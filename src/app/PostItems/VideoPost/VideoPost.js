import React from 'react'
import './VideoPost.css'

export const VideoPost = (props) => {
    const { post } = props
    return (
        <div className="videoPost-player">
            {/* <iframe
                width="100%"
                height="500"
                src={`${post.videoUrl}`}>
            </iframe> */}
            <iframe id="existing-iframe-example"
                width="500" height="800"
                src={`${post.videoUrl}`}
                frameBorder="0"
            ></iframe>
            <div className="videoPost-comments">
                <p>Comments:{post.comments.length}</p>
            </div>
        </div>
    )
}