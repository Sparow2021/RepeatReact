import React, { useState } from "react";
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

  const [title, setTitle] = useState('sadasd');

  function setNewTitle(event){
    event.preventDefault();
    console.log({title})
  }
  
  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название" value={title} onChange={e => setTitle(e.target.value)}/>
        <input type="text" placeholder="Описание"/>
        <MyButton  onClick={setNewTitle}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список курсов: '}/>
    </div>
  );
}

export default App;
