import React from 'react';
import { fetchSinglePost } from '../../services/fetchPosts';
import { SinglePostItem } from '../SinglePostItem/SinglePostItem';
import { fetchComments } from '../../services/fetchComments';
import { CommentsList } from '../Comments/CommentsList';

export class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            comments: []
        }
    }

    loadPost() {
        const userId = this.props.match.params.id;
        fetchSinglePost(userId)
            .then((post) => {
                this.setState({ post: post })
            })

        fetchComments(userId)
            .then((comments) => {
                this.setState({ comments: comments })
            })

    }

    componentDidMount() {
        this.loadPost()
    }


    render() {
        const { post, comments } = this.state;

        if (!post) {
            return <p>Loading ...</p>
        }
        return (
            <>
                <div>
                    <SinglePostItem post={post} />
                    <CommentsList comments={comments} />
                </div>
            </>
        )
    }
} 