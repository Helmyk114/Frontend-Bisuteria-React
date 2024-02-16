import React, { forwardRef, useState, useEffect } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { infoComboBox } from "../../../../api/formularios";

const ListBoxSimple = forwardRef(({ placement, fontSize, apiEndpoint, idOpcion, texto, ...props }, ref) => {

  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    const obtenerOpciones = async () => {
      try {
        const response = await infoComboBox(apiEndpoint)
        setOpciones(response.data);
      } catch (error) {
        console.error('Error al obtener opciones:', error);
      }
    };
    obtenerOpciones();
  }, [apiEndpoint]);


  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Autocomplete
          ref={ref}
          labelPlacement={placement}
          className="max-w-sm"
          radius="full"
          style={{ fontFamily: "Roboto, sans-serif", fontSize: fontSize || "12px" }}
          {...props}
          defaultItems={opciones}
        >
          {(item) => 
          <AutocompleteItem 
            key={item[idOpcion]} 
            value={item[idOpcion]} 
          >
            {item[texto]}
          </AutocompleteItem>}
        </Autocomplete>
      </div>
    </div>
  );
});

ListBoxSimple.displayName = 'ListBoxSimple'

export default ListBoxSimple;