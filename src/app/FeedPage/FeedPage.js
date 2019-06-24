import React from 'react'
import { fetchPosts } from '../../services/fetchPosts'

export class FeedPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    loadPosts() {
        fetchPosts()
            .then(posts =>
                this.setState({ posts }))
    }

    componentDidMount() {
        this.loadPosts()

    }

    render() {
        return (
            <>
                <div>

                </div>

            </>
        )
    }
}