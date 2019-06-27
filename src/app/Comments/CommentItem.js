import React from 'react';
import './CommentItem.css';
import { fetchSingleUser } from '../../services/fetchUsers';

export class CommentItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }


    loadUserData() {
        const userId = this.props.comment.userId;

        fetchSingleUser(userId)
            .then(user => this.setState({ user }))
    }

    componentDidMount() {
        this.loadUserData()
    }


    render() {

        const { comment } = this.props;
        const { user } = this.state;


        if (!user) {
            return <p>Loading...</p>
        }

        return (
            <>
                <div className="commentItem-singleComment">
                    <div className="commentItem-user">
                        <img src={user.avatar} alt="" className="user-photo" />
                        <p className="commentItem-name">{user.first}</p>
                    </div>
                    <p className="commentItem-body">{comment.body}</p>
                </div>
            </>
        )
    }

}