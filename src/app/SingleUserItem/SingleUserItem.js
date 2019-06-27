import React from 'react';
import './SingleUserItem.css';

export const SingleUserItem = (props) => {
    const { user } = props;
    const errorIMG = "https://roundhouse-assets.s3.amazonaws.com/assets/Image/15214-fitandcrop-1200x681.jpg";
    return (
        <>
            <div className="singleUserItem-img-holder">
                {(!user.avatar) ? <img src={errorIMG} alt="img" /> : <img src={user.avatar} alt="user" />}
            </div>
            <p className="singleUserItem-name">{`${user.firstName} ${user.lastName}`}</p>
            <p className="singleUserItem-bio">{user.bio}</p>
        </>
    )
}