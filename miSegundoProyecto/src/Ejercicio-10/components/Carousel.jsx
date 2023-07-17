import React from "react";
import { useState } from "react";
import "./carousel.css";

const Carousel = ({ imagenes }) => {


  const [currentImg, setImg] = useState(0);



  const cantidadImagenes = imagenes?.lenght;


  if (!Array.isArray(imagenes) || cantidadImagenes === 0)
    return;

  const siguienteImg = () => {
    setImg(currentImg === cantidadImagenes - 1 ? 0 : currentImg + 1)
  }

  const anteriorImg = () => {
    setImg(currentImg === 0 ? cantidadImagenes - 1 : currentImg - 1)
  }







  return (
    <div>


      <button type="button" onClick={anteriorImg}>prev</button>


      {imagenes.map((img, index) => {
        return (
          <div key={index}>
              {currentImg === index && (
                <img key={index} src={img} />
              )}
              
          </div>
        )
      })}

      <button type="button" onClick={siguienteImg}>next</button>





    </div>
  );
};

export default Carousel;
