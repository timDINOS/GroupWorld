import React from 'react';
import useStyles from './style';

const Post = () => {
    const classes = useStyles();
    return (
     <>
        <h1>post</h1>
        <Post />
        <Post />
    </>
    );
}

export default Post;