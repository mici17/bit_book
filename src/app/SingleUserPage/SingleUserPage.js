import React from 'react';
import { fetchSingleUser } from '../../services/fetchUsers';
import { SingleUserItem } from '../SingleUserItem/SingleUserItem';
import { SingleUserPostsNumber } from './SingleUserPostsNumber'
import './SingleUserPage.css';
import { SingleUserCommentsNumber } from './SingleUserCommentsNumber';

export class SingleUserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    loadUser() {
        const userId = this.props.match.params.id;

        fetchSingleUser(userId)
            .then(user => {
                this.setState({ user })
            })
    }

    componentDidMount() {
        this.loadUser()
    }


    render() {
        const userId = this.props.match.params.id;
        const { user } = this.state;

        if (!user) {
            return <p>Loading</p>
        }

        return (
            <>
                <div className="singleUserPage-container">
                    <SingleUserItem user={user} />
                    <div className="singleUserPage-details">
                        <SingleUserPostsNumber userId={userId} />
                        <SingleUserCommentsNumber userId={userId} />
                    </div>
                </div>
            </>
        )
    }
}