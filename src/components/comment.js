import React from 'react';
import ReplyButton from './replybutton';
import LikeButton from './likebutton';

let e = React.createElement

export default class Comment extends React.Component {
    render() {
        return(
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    Comment Content
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                </div>
            </div>
        );
    }
}