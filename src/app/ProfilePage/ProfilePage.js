import React from 'react';
import { fetchUserProfile } from '../../services/fetchUsers';
import { ProfileUserPostsNumber } from './ProfileUserPostsNumber';
import { ProfileUserCommentsNumber } from './ProfileUserCommentsNumber';
import { ProfileUserItem } from './ProfileUserItem';
import { loadId } from '../../services/fetchUsers'
import './ProfilePage.css';

export class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    loadUser() {

        fetchUserProfile()
            .then(user => {
                this.setState({ user })
            })
    }

    componentDidMount() {
        this.loadUser()
    }


    render() {
        const { user } = this.state;

        if (!user) {
            return <p>Loading</p>
        }

        return (
            <>
                <div className="profilePage-container">
                    <ProfileUserItem user={user} />
                    <div className="profilePage-details">
                        <ProfileUserPostsNumber userId={loadId()} />
                        <ProfileUserCommentsNumber userId={loadId()} />
                    </div>
                </div>
            </>
        )
    }
}