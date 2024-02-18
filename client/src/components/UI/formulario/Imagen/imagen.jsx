import React, { useEffect, useState } from 'react';
import {Card, CardBody} from "@nextui-org/react";
import './imagen.css';

const SubirImagen = ({ onImageChange, defaultImageSrc }) => {
  const raizUrl = process.env.REACT_APP_API_URL;
  const [imageSrc, setImageSrc] = useState(defaultImageSrc || null);

  useEffect(() => {
    if (defaultImageSrc && defaultImageSrc[0] && defaultImageSrc[0].image) {
      const imageUrl = `${raizUrl}/${defaultImageSrc[0].image}`;
      setImageSrc(imageUrl);
    } else if (defaultImageSrc && defaultImageSrc[0] && defaultImageSrc[0].photo) {
      const imageUrl = `${raizUrl}/${defaultImageSrc[0].photo}`;
      setImageSrc(imageUrl);
    }
  }, [defaultImageSrc, raizUrl]);

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    if (onImageChange) {
      onImageChange(selectedImage);
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className='content'>
      <Card className='card'>
        <div className='img'>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt='Imagen seleccionada'
              style={{
                maxWidth: '100',
                maxHeight: '200px'
              }}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-card-image"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              <path
                d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5z" />
            </svg>
          )}
        </div>
        <CardBody className='body'>
          <input
            className='boton'
            type='file'
            onChange={handleFileChange} />
        </CardBody>
      </Card>
    </div>
  );
};

export default SubirImagen;