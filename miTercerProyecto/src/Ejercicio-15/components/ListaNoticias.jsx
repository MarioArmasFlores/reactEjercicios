import React, { useState } from "react";
import styles from './ListaNoticias.module.css'

const ListaNoticias = ({ noticias }) => {
  const [selectedDate_I, setSelectedDate_I] = useState("");
  const [selectedDate_F, setSelectedDate_F] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroPalabaraClave, setFiltroPalabraClave] = useState("");
  const [noticiasFiltradas, setNoticiasFiltradas] = useState(noticias);

  const filtrarNoticias = () => {
    let noticias2 = [...noticias];

    //filtracion por fecha.

    if (selectedDate_I && selectedDate_F) {
      noticias2 = noticias2.filter(
        (noticia) =>
          noticia.fecha >= new Date(selectedDate_I) &&
          noticia.fecha <= new Date(selectedDate_F)
      );
    }

    //filracion por categorias

    if (filtroCategoria) {
      noticias2 = noticias2.filter(
        (noticia) => noticia.categoria === filtroCategoria
      );
    }

    //filtracion por palabra clave

    if (filtroPalabaraClave) {
      noticias2 = noticias2.filter(
        (noticia) => 
        noticia.titulo.includes(filtroPalabaraClave) ||
        noticia.descripcion.includes(filtroPalabaraClave)
      );
    }

    setNoticiasFiltradas(noticias2);
  };

  return (
    <div>
      <h2>filtrar noticias</h2>
      <div>
      <label htmlFor="">Fecha inicio</label>
      <input
        type="date"
        value={selectedDate_I}
        onChange={(e) => setSelectedDate_I(e.target.value)}
      />

      <label htmlFor="">Fecha Fin</label>
      <input
        type="date"
        value={selectedDate_F}
        onChange={(e) => setSelectedDate_F(e.target.value)}
      />
      </div>

      <label htmlFor=""> Filtracion por Categoria </label>
      <input
        type="text"
        value={filtroCategoria}
        onChange={(e) => setFiltroCategoria(e.target.value)}
      />

      <label htmlFor=""> Filtracion por palabra clave </label>
      <input
        type="text"
        value={filtroPalabaraClave}
        onChange={(e) => setFiltroPalabraClave(e.target.value)}
      />

      <button onClick={filtrarNoticias}>filtrar</button>
      <ul>
        {noticiasFiltradas.map((noticia, index) => {
          return (
            <li key={index} className={styles.listaE}>
              <h3 className={styles.tituloNoticia}>{noticia.titulo} </h3>
              <p>{noticia.descripcion}</p>
              <p>→ {noticia.categoria} ←</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaNoticias;
