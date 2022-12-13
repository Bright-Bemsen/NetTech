import {React, useState} from 'react';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import About from '../About-page/About';
import Team from '../Team-page/Team';
import Contact from '../Contact-page/Contact';
import {Routes, Route, BrowserRouter}from 'react-router-dom';
import Error from '../Error-page/Error';
import Comment from '../Comment-page/Comment';
import Login from '../Login-page/Login';
import GetStarted from '../GetStarted-button/GetStarted';
import { nameContext } from '../../context';

function App(){
  const [name, setname] = useState("none")

  return(
    <>

      <BrowserRouter>
      {/* initialising context provider and passing value to it */}
      <nameContext.Provider value={{name, setname}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/getStarted' element={<GetStarted/>} />
        <Route path='*' element={<Error/>} />
        <Route path='/Comment' element={<Comment/>} />
        <Route path='/Login' element={<Login/>} />
      
      </Routes>
      <Comment/>
      </nameContext.Provider>
      </BrowserRouter>
  
    </>

    
  
  )
}

export default App;