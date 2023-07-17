import React, { useState } from "react";
import styles from "./ArregloObjeto.module.css";
import Carrito from "./Carrito";

const ArregloObjetos = ({ productos, total, setTotal }) => {
  const [productoAñadido, setProductoAñadido] = useState(false);
  const [addItem, setAddItem] = useState([]);

  const addToCart = (producto) => {
    setAddItem((item) => [...item, producto]);
  };

  console.log(addItem);

  const activarCarrito = () => {
    setProductoAñadido(!productoAñadido);
  };

  return (
    <div className={styles.organi}>
      <ul className={styles.listaItems}>
        {productos.map((producto) => {
          return (
            <li key={producto.id}>
              <h1>{producto.item}</h1>
              <p>{producto.price}</p>
              <p>{producto.description}</p>
              <button onClick={() => addToCart(producto)}>Ver Carrito</button>
            </li>
          );
        })}
      </ul>

      <div>
        <ul>
          <button onClick={activarCarrito}>Carrito</button>
          {productoAñadido && (
            <Carrito
              productoAñadido={addItem}
              activarCarrito={activarCarrito}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default ArregloObjetos;
