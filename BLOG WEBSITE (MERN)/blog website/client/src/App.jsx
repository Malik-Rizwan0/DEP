import './App.css'
import Home from './Home Page/Home'
import Navbar from './Component/Navbar/Navbar'
import Single from './single/Single'
import Write from './Write/Write'
import Settings from './Setting/Settings'
import Login from './Login/Login'
import Register from './Register/Register'
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {

  const router = createBrowserRouter ([
    {
      path : '/', element : <> <Navbar/> <Home/></>
    },
    {
      path : '/register', element : <><Navbar/> <Register/></>
    },
    {
      path : '/login', element : <><Navbar/> <Login/></>
    },
    {
      path : '/write', element : <><Navbar/> <Write/></>
    },
    {
      path : '/settings', element : <><Navbar/> <Settings/></>
    },
    {
      path : '/post/:postId', element : <><Navbar/> <Single/></>
    }

  ])

  return (
    <>
      <RouterProvider router={router}/>
    

    {/* <Home/> */}
    {/* <Single/> */}
    {/* <Write/> */}
    {/* <Settings/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    </>
  )
}

export default App
