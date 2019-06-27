import React from 'react';
import { fetchProfileUserCommentsNumber } from '../../services/fetchComments';

export class ProfileUserCommentsNumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentsNumber: 0
        }
    }

    loadPosts() {

        fetchProfileUserCommentsNumber()
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