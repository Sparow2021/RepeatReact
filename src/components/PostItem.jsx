import React from 'react';

const PostItem = (props) => {
    console.log(props)
    return (
    <div className="post">
        <div className="post__content">
            <strong>1. Javascript</strong>
            <div>Javascript - язык программирования</div>
        </div>
        <div className="post__btn">
            <button>Удалить</button>
        </div>
    </div>);
}

export default PostItem;