import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
// import Sidebar from './Componenets/Sidebar/Sidebar'

const App =()=> {
   
  const [sidebar, setsidebar] = useState(true);

  return (
   <div>
    <Navbar setsidebar={setsidebar}/>
      <Routes>
     <Route path='/' element ={<Home sidebar={sidebar}/>}/>
     <Route path='/video/:categoryId/:videoId' element ={<Video/>}/>
      </Routes>
    
   </div>
  )
}

export default App
