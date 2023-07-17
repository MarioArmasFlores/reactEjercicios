import React, { useState } from "react";
import ArregloObjetos from "../components/ArregloObjetos";

function Ejercicio12() {
  
 

  const arregloItems = [
    { item: "Dragon Slayer", id: "1", description: "Berserk", price: "$650" },
    {
      item: "Buster Sword",
      id: "2",
      description: "Final Fantasy",
      price: "$750",
    },
    {
      item: "Ancient Sword",
      id: "3",
      description: "Shadow of the Colossus",
      price: "$850",
    },
    {
      item: "The Master Sword",
      id: "4",
      description: "The legend of Zelda",
      price: "$750",
    },
    { item: "Energy Sword", id: "5", description: "Halo", price: "$1000" },
    { item: "Diamond Sword", id: "6", description: "Minecraft", price: "$850" },
  ];


  return (
    <div>
      <ArregloObjetos
        productos={arregloItems}
      />
    </div>
  );
}

export default Ejercicio12;
