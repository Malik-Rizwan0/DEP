import React from 'react';
import './home.css';
import Header from '../Component/header/Header';
import Sidebar from '../Component/Sidebar/Sidebar';
import Posts from '../Component/Posts/Posts';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';


function Home() {
  const [posts , setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = await axios.get("/api/posts")
      setPosts(res.data)
    }
    fetchPosts()
    
  }, [])
  
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  )
}

export default Home
