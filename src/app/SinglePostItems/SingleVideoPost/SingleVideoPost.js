import React from 'react';
import './SingleVideoPost.css';

export const SingleVideoPost = (props) => {
    const { post } = props
    return (
        <div className="single-videoPost-player">
            <div className="singleVideo-iframe">
                <iframe id="existing-iframe-example" title="video"
                    width="1280" height="720"
                    src={`${post.videoUrl}`}
                    frameBorder="0"
                ></iframe>
            </div>
            <div className="singleVideo-comments">

            </div>
        </div>
    )
}