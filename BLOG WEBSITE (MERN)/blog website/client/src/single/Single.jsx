import React from 'react'
import './Single.css'
import SinglePost from '../Component/SinglePost/SinglePost'
import Sidebar from '../Component/Sidebar/Sidebar'

function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single
