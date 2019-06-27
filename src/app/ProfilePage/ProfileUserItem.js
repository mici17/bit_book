import React from 'react';
import './ProfileUserItem.css'

export const ProfileUserItem = (props) => {
    const { user } = props;

    return (
        <>
            <div className="profileUserItem-img-holder">
                <img src={user.avatar} alt="user" />
            </div>
            <p className="profileUserItem-name">{`${user.firstName} ${user.lastName}`}</p>
            <p className="profileUserItem-bio">{user.bio}</p>
        </>
    )
}