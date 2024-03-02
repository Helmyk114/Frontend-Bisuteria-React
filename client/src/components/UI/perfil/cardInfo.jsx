import React from "react";
import { Icon } from '@iconify/react';
import { Card, CardHeader} from "@nextui-org/react";
import '../perfil/cardInfo.css'

export default function CardPerfil({children,alignItems, justifyContent,  display, gap, flexDirection, width, height }) {

  return (
    <Card className="cardprincipal" style={{width:width, height:height}}>
      <CardHeader>
      <div className="cardGap" style={{ display:display|| "flex", alignItems:alignItems || "center", justifyContent:justifyContent, gap:gap||"13px", flexDirection:flexDirection || "row"}}>
        {children}
      </div> 
      </CardHeader>
    </Card>
  );
}
export function IconoCard ({icon, width, height, color}){
  return(
    <div>
          <Icon icon={icon} className="iconoCard"style={{ color: color, width:width, height:height}} />
     </div>
 )
}
export function Texto1Card ({texto, fontSize,  fontWeight, textAlign}){
  return(
    
    <h4 className="text-base  leading-none text-default-600" style={{fontSize:fontSize, fontWeight:fontWeight || "600", textAlign:textAlign}}>{texto} </h4>
  )
}

export function Texto2Card ({texto2, fontSize}){
  return(
    <h5 className=" tracking-tight text-default-400" style={{fontSize:fontSize}}>{texto2}</h5>
  )
}
