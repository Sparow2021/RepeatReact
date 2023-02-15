import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Typescript', body: 'Description' },
    { id: 3, title: 'NodeJS', body: 'Description' },
    { id: 4, title: 'React', body: 'Description' }
  ])

  //Делает общее состояние, которое будет не строкой, а обьектом со свойствами-значениями
  const [post, setPost] = useState({
    title:'',
    body: '',
    id: Date.now(),
  })


  function addNewPost(event) {
    event.preventDefault();
    setPosts([...posts, post]);
    setPost({title:'', body: '', id: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="Название"
          value={post.title}
          onChange={e => setPost({...post , title:e.target.value})} />
        <MyInput
          type="text"
          placeholder="Описание"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})} />
        <MyButton disabled onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список курсов: '} />
    </div>
  );
}

export default App;
