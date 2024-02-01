import React, {useState} from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import FormularioTrabajador from "../../components/Formularios/añadirTrabajador";
import Imagen from "../../components/Formularios/Controles/imagen";
import { useForm } from "react-hook-form";
import { añadirInformacionAPI } from "../../api/productos";
import { Button, Form } from "react-bootstrap";
import Swal from 'sweetalert2'
import { añadiProductoAPI } from "../../api/productos";
import {  Form } from "react-bootstrap";
import BtnFormularios from "../../components/Botones/BotonFormularios/btnFormularios";

function CrearTrabajador() {
    const { handleSubmit, control } = useForm();
    const [selectedImage, setSelectedImage] = useState();
    const endPoint = 'trabajador'

    const onSubmit = async (data) => {
        const trabajador = {
        ...data,
        photo: selectedImage,
        };
        console.log('objeto creado: ',trabajador)
        try {
            await añadirInformacionAPI(trabajador, endPoint)
            Swal.fire({
                icon: "success",
                title: "Se ha creado un trabajador!",
                showConfirmButton: false,
                timer: 1500
              });
        } catch (error) {
            console.error('Error al crear un trabajador', error)
            Swal.fire({
                icon: "error",
                title: "No Se puede crear un trabajador!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div >
            <Navbar>
                <BotonRetroceder/>
                <Titulo 
                    texto='Añadir trabajador'
                />
                <Notificacion/>
            </Navbar>
            <Form style={{margin:'0 auto', width:'100%'}}onSubmit={handleSubmit(onSubmit)}>
                <Imagen onImageChange={setSelectedImage} />
                <FormularioTrabajador control={control} />
            {/* <BtnFormularios type={'submit'} btnTitulo={'registrar trabjador'}/> */}
            </Form>
                
            <Footer/>
        </div>
    );
};

export default CrearTrabajador;