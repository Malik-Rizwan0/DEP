import React from 'react'
import './home.css'
import Header from '../Component/header/Header'
import Sidebar from '../Component/Sidebar/Sidebar'
import Posts from '../Component/Posts/Posts'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <Sidebar />
      </div>
    </>
  )
}

export default Home
