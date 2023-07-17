import React from "react";
import ListaNoticias from "../components/ListaNoticias";

function Ejercicio15() {
 
 
 
  var noticias = [
    {
      titulo:
        "Nuevas evidencias en el caso del asesinato en la mansión Hillside",
      categoria: "Crimen",
      fecha: new Date("07/13/2023"),
      descripcion:
        "Se descubren nuevas pruebas que podrían revelar al asesino en el misterioso caso del asesinato en la mansión Hillside. La policía intensifica la investigación.",
    },
    {
      titulo:
        "Histórico: Equipo de fútbol local clasifica a la final de la Copa Mundial",
      categoria: "Deportes",
      fecha: new Date("07/14/2023"),
      descripcion:
        "En un emocionante partido, el equipo de fútbol local logra clasificar a la final de la Copa Mundial, generando una gran expectativa entre los fanáticos y la comunidad deportiva.",
    },
    {
      titulo: "Descubren nueva especie de mariposa en la selva amazónica",
      categoria: "Ciencia y Naturaleza",
      fecha: new Date("07/15/2023"),
      descripcion:
        "Científicos anunciaron el descubrimiento de una nueva especie de mariposa en la selva amazónica. Esta revelación podría tener implicaciones importantes para la conservación de la biodiversidad.",
    },
    {
      titulo:
        "Avistamiento de ovnis en la ciudad: ¿contacto extraterrestre o fenómeno natural?",
      categoria: "Misterio",
      fecha: new Date("07/16/2023"),
      descripcion:
        "Testigos reportan avistamientos de objetos voladores no identificados en diferentes partes de la ciudad. Expertos debaten si se trata de contactos extraterrestres o explicaciones terrenales.",
    },
    {
      titulo:
        "Inauguración del nuevo parque acuático: diversión asegurada para toda la familia",
      categoria: "Entretenimiento",
      fecha: new Date("07/17/2023"),
      descripcion:
        "Con la llegada del verano, el nuevo parque acuático abre sus puertas ofreciendo atracciones emocionantes y refrescantes para todas las edades.",
    },
    {
      titulo:
        "Estudio revela aumento alarmante de la contaminación en las playas locales",
      categoria: "Medio Ambiente",
      fecha: new Date("07/18/2023"),
      descripcion:
        "Un estudio reciente muestra un preocupante aumento en los niveles de contaminación en las playas locales, lo que plantea la necesidad de tomar medidas urgentes para proteger el ecosistema marino.",
    },
    {
      titulo:
        "Lanzamiento de nueva película de superhéroes rompe récords de taquilla",
      categoria: "Entretenimiento",
      fecha: new Date("07/19/2023"),
      descripcion:
        "La esperada película de superhéroes ha conquistado a la audiencia y batido récords de taquilla en su primer fin de semana de estreno.",
    },
    {
      titulo:
        "Investigación científica revela la clave para una vida saludable y longeva",
      categoria: "Salud",
      fecha: new Date("07/20/2023"),
      descripcion:
        "Un estudio científico pionero proporciona información sobre los factores clave para una vida saludable y longeva, ofreciendo consejos prácticos para el bienestar personal.",
    },
    {
      titulo: "Desaparece antiguo tesoro de un museo: la policía busca pistas",
      categoria: "Crimen",
      fecha: new Date("07/21/2023"),
      descripcion: "Un valioso tesoro desaparece misterio",
    },
  ];

  return (
    <div>
      <ListaNoticias 
      noticias = {noticias}
      />
    </div>
  );
}

export default Ejercicio15;
