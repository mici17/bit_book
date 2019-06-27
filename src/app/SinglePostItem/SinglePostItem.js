import React from 'react'
import { SingleVideoPost } from '../SinglePostItems/SingleVideoPost/SingleVideoPost'
import { SingleImagePost } from '../SinglePostItems/SingleImagePost/SingleImagePost'
import { SingleTextPost } from '../SinglePostItems/SingleTextPost/SingleTextPost'


export const SinglePostItem = (props) => {
    const { post } = props;
    if (post.type === 'video') {
        return <SingleVideoPost post={post} />
    } if (post.type === 'image') {
        return <SingleImagePost post={post} />
    } else {
        return <SingleTextPost post={post} />
    }
}