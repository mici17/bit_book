import React from 'react';
import { fetchSingleUserCommentsNumber } from '../../services/fetchComments';

export class SingleUserCommentsNumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentsNumber: 0
        }
    }

    loadPosts() {
        const userId = this.props.userId;
        fetchSingleUserCommentsNumber(userId)
            .then(commentsNumber => {
                this.setState({ commentsNumber })
            })

    }

    componentDidMount() {
        this.loadPosts()
    }


    render() {
        const { commentsNumber } = this.state;
        return (
            <>
                <p>Number of comments: {commentsNumber}</p>
            </>

        )
    }
}