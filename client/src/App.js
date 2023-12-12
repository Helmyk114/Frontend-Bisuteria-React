import React, {useState} from 'react';
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login';
import RegistroTrabajador from './pages/RegistroTrabajador';
import Error from './pages/Error';
import Navegar from './components/Navbar';


function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <BrowserRouter>
     <Navegar/>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/RegistroTrabajador' element={<RegistroTrabajador/>}/>
    <Route path='*' element={<Error/>}/>
   
    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
