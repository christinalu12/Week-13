import React from 'react';
import ReplyButton from './replybutton';
import LikeButton from './likebutton';
import Comment from './comment';

let e = React.createElement

export default class Post extends React.Component {
    render() {
        return (
            <div className='card w-75'>
                <div className='card-header bg-success text-white'>
                    Username and Time
                </div>
                <div className='card-body'>
                    This is where our content goes.
                </div>
                <div className='card-footer'>
                    <LikeButton />
                    <ReplyButton />
                    <Comment />
                    <Comment />
                </div>
            </div>
        );
    }
}