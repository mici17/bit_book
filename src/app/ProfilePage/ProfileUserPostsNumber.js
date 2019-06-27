import React from 'react';
import { fetchProfileUserPostsNumber } from '../../services/fetchPosts';

export class ProfileUserPostsNumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postsNumber: 0
        }
    }

    loadPosts() {
        fetchProfileUserPostsNumber()
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