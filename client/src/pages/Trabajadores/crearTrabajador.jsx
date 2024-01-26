import React, {useState} from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import FormularioTrabajador from "../../components/Formularios/añadirTrabajador";
import Imagen from "../../components/Formularios/Controles/imagen";
import { useForm } from "react-hook-form";
import { añadiProductoAPI } from "../../api/productos";
import { Button, Form } from "react-bootstrap";

function CrearTrabajador() {
    const { handleSubmit, control } = useForm();
    const [selectedImage, setSelectedImage] = useState();
    const endPoint = 'trabajador'

    const onSubmit = async (data) => {
        const trabajador = {
        ...data,
        photo: selectedImage,
        };
        try {
            await añadiProductoAPI(trabajador, endPoint)
            // Swal.fire('Producto creado', 'success')
        } catch (error) {
            // Swal.fire('Error', 'No se pudo crear el producto', 'error');
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
                <Button style={{marginBottom:'230px', backgroundColor:'#6977E4'}} type="submit">Añadir Trabajador</Button>
            </Form>
            <Footer/>
        </div>
    );
};

export default CrearTrabajador;