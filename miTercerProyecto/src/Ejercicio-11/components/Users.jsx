import React, { useState } from "react";
import styles from "./ArregloUsers.module.css";

const Users = ({ usuarios }) => {
  const [usuarioActual, setUsuarioActual] = useState(null);

  const desplegarInfo = (usuario) => {
    setUsuarioActual(usuario);
  };

  return (
    <div>
      <div>
        <h1>Lista de Candidatos</h1>

        {usuarios.map((usuario) => {
          return (
            <div
              className={styles.name_Person}
              onClick={() => desplegarInfo(usuario)}
              key={usuario.id}
            >
              {usuario.nombre} - {usuario.email}
            </div>
          );
        })}

        {usuarioActual && (
          <div className={styles.extra_info}>
            <h1>{usuarioActual.nombre}</h1>
            <h2>{usuarioActual.ocupacion}</h2>
            <p> correo: {usuarioActual.email}</p>
            <p>{usuarioActual.edad} años</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
