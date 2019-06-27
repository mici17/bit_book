import React from 'react';
import { CommentItem } from './CommentItem';
import './CommentsList.css'

export const CommentsList = (props) => {
    const { comments } = props;

    if (!comments || comments.length === 0) {
        return (
            <div className="commentsList-noComment">
                <p className="commentsList-noComment-p">No comments</p>
            </div>
        )
    }
    return (
        <div>
            {comments.map((comment, i) => {
                return (
                    <div key={i}>
                        <CommentItem comment={comment} key={i} />
                    </div>
                )
            })}
        </div>
    )
}