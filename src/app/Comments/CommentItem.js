import React from 'react';
import './CommentItem.css';

export const CommentItem = (props) => {
    const { comment } = props

    return (
        <div>
            <p className="commentItem-body">{comment.body}</p>
        </div>
    )

}