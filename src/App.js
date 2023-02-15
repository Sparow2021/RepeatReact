import React, {useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Typescript', body: 'Description' },
    { id: 3, title: 'NodeJS', body: 'Description' },
    { id: 4, title: 'React', body: 'Description' }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title={'Список курсов: '} />
      ) : (
        <h1 className="list_h">Список постов пуст</h1>
      )}
    </div>
  );
}

export default App;
