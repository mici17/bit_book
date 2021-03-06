import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css'

export const UserItem = (props) => {
    const { user } = props;
    const errorIMG = "https://roundhouse-assets.s3.amazonaws.com/assets/Image/15214-fitandcrop-1200x681.jpg";

    return (
        <>
            <Link to={`/people/${user.id}`}>
                <div className="userItem-user-container">
                    <div className="userItem-img-holder">
                        {(!user.avatar) ? <img src={errorIMG} alt="img" /> : <img src={user.avatar} alt="user" />}
                    </div>
                    <div>
                        <p className="userItem-name">{`${user.firstName} ${user.lastName}`}</p>
                        <p className="userItem-bio">{user.bio}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}