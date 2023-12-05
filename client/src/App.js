import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Navegar from './components/Navbar'
import{Route, Routes} from "react-router-dom"
import TarjetaImg from './components/TarjetaImgRegistroT';
import TarjetaForm from './components/TarjetaFormrRegistroT';


function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      < Navegar/>
      < TarjetaImg/>
      < TarjetaForm/>

     
    
       {/* <Routes>
       <Route path='/anillos' element={<Anillos/>}/>
       <Route path='/aretas' element={<aretas/>}/>
       <Route path='/pulseras' element={}/>
       <Route path='/chokers' element={}/>


       </Routes> */}

    </div>
   
  );
}

export default App;
