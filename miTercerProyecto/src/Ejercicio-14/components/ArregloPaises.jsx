import React from "react";
import styles from "./ArregloPaises.module.css"

const ArregloPaises = ({ pais, seleccionadoPais, setseleccionadoPais }) => {


  const onClickHandler = (pais_1) => {
    setseleccionadoPais(pais_1)
  }

  return (

    <div className={styles.contenedor}>

      {pais.map((pais_1, index) => {
        return (
          <div className={styles.contenedor2} key={index} onClick={() => onClickHandler(pais_1)}>
            <h1 className={styles.countryTitle}>{pais_1.nombre}</h1>
          </div>
        );
      })}

      { seleccionadoPais && (

        <div className={styles.extraInfoCountry}>
            <h1>{seleccionadoPais.nombre}</h1>
            <h3 className={styles.infoDescription}>{seleccionadoPais.breve}</h3>
            <p >{seleccionadoPais.poblacion} habitantes</p>
        </div>
      )}

    </div>
  );
};

export default ArregloPaises;
