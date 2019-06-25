import React from 'react'
import { VideoPost } from '../PostItems/VideoPost/VideoPost'
import { ImagePost } from '../PostItems/ImagePost/ImagePost'
import { TextPost } from '../PostItems/TextPost/TextPost'


export const PostItem = (props) => {
    const { post } = props;
    if (post.type === 'video') {
        return <VideoPost post={post} />
    } if (post.type === 'image') {
        return <ImagePost post={post} />
    } else {
        return <TextPost post={post} />
    }
}