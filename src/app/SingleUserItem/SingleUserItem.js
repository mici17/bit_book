import React from 'react';
import './SingleUserItem.css';

export const SingleUserItem = (props) => {
    const { user } = props;

    return (
        <>
            <div className="singleUserItem-img-holder">
                <img src={user.avatar} alt="user" />
            </div>
            <p className="singleUserItem-name">{`${user.firstName} ${user.lastName}`}</p>
            <p className="singleUserItem-bio">{user.bio}</p>
            <div>
                <p></p>
                <p></p>
            </div>
        </>
    )
}