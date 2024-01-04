import {useForm} from 'react-hook-form'
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Formulario from '../components/Form/Form';

// Estilos CSS en formato de plantilla literal

function Login() {

  return (
    <div>
      <Navbar/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default Login;