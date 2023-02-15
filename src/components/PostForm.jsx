import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';


const PostForm = () => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Название"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })} />
            <MyInput
                type="text"

                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })} />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
}

export default PostForm;