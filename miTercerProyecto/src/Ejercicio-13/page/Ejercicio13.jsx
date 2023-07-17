import React from "react";
import SeccionComm from "../components/seccionComm";
import imagenLibro from "../../assets/images/EpictetoLibro.jpg";



function Ejercicio13() {
  const libro = {
    nombre: "Inquiridion",
    portada: imagenLibro,
    detalles: "Libro antiguo de Filosofia - Estoicismo",
    editorial: "Santillana",
  };

  return (
    <div>
      
      <div className="libro-caja">
        <img src={libro.portada} />
        <h1>{libro.nombre}</h1>
        <p>{libro.detalles}</p>
        <p>{libro.editorial}</p>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h3>Caja de Comentarios</h3>
        
        <SeccionComm/>
      </div>
    </div>
  );
}

export default Ejercicio13;
