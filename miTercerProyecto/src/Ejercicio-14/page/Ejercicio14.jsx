import React, { useState } from "react";
import ArregloPaises from "../components/ArregloPaises";


function Ejercicio14() {


  const [seleccionadoPais, setseleccionadoPais] = useState(null)
  const [pais, setPaises] = useState([
    {
      nombre: "Japón",
      poblacion: "126.3 millones",
      breve:
        "Japón es conocido por su rica historia, tecnología avanzada y exquisita gastronomía.",
    },
    {
      nombre: "Holanda",
      poblacion: "17.3 millones",
      breve:
        "Holanda es famosa por sus molinos de viento, tulipanes y su enfoque en la sostenibilidad.",
    },
    {
      nombre: "Noruega",
      poblacion: "5.4 millones",
      breve:
        "Noruega es famosa por sus impresionantes paisajes naturales, fiordos y la aurora boreal.",
    },
    {
      nombre: "Egipto",
      poblacion: "104 millones",
      breve:
        "Egipto es una tierra llena de historia antigua, con las majestuosas pirámides y el río Nilo como destacados.",
    },
  ]);

  

  return (
    <div>
      <ArregloPaises 
      pais={pais}
      setPaises = {setPaises}
      seleccionadoPais = {seleccionadoPais}
      setseleccionadoPais = {setseleccionadoPais}

      
      />
    </div>
  );
}

export default Ejercicio14;
