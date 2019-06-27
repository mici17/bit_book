import React from 'react';
import './ProfileUserItem.css'

export const ProfileUserItem = (props) => {
    const { user } = props;
    const errorIMG = "https://roundhouse-assets.s3.amazonaws.com/assets/Image/15214-fitandcrop-1200x681.jpg";

    return (
        <>
            <div className="profileUserItem-img-holder">
                {(!user.avatar) ? <img src={errorIMG} alt="img" /> : <img src={user.avatar} alt="user" />}
            </div>
            <p className="profileUserItem-name">{`${user.firstName} ${user.lastName}`}</p>
            <p className="profileUserItem-bio">{user.bio}</p>
        </>
    )
}