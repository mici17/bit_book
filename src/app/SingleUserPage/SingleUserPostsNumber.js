import React from 'react';
import { fetchSingleUserPostsNumber } from '../../services/fetchPosts';

export class SingleUserPostsNumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postsNumber: 0
        }
    }

    loadPosts() {
        const userId = this.props.userId;
        fetchSingleUserPostsNumber(userId)
            .then(postsNumber => {
                this.setState({ postsNumber })
            })

    }

    componentDidMount() {
        this.loadPosts()
    }


    render() {
        const { postsNumber } = this.state;
        return (
            <>
                <p>Number of posts: {postsNumber}</p>
            </>

        )
    }
}