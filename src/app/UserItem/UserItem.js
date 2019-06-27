import React from 'react';
import {Link} from 'react-router-dom';
import './UserItem.css'

export const UserItem = (props) => {
    const {user} = props;

    return (
        <>
        <Link to={`/people/${user.id}`}>
        <div className="userItem-user-container">
        <div className="userItem-img-holder"> <img src={user.avatar}/></div>
        <div>
            <p className="userItem-name">{`${user.firstName} ${user.lastName}`}</p>
            <p clasName="userItem-bio">{user.bio}</p>
        </div>
        </div>
        </Link>
        </>
    )
}