import "./App.css";
import { useMemo, useState } from "react";
import RestaurantList from "./components/RestaurantList";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Restaurante from "./components/Restaurante";
import Home from "./components/Home";
import RestaurantLayout from "./components/RestaurantLayout";
import NotFound from "./components/NoteFound";
import { Restaurantes } from "./components/Restaurantes";

function App() {
  const [restaurantes, setRestaurantes] = useState([...Restaurantes]);
  /////////////
 /*  const selectedRestInfo = useMemo(() => {
    return restaurantes.map((restaurant) => {
      return {
        ...restaurantes,
        name: restaurant.name.toLowerCase().includes(name.toLowerCase()),
      };
    });
  }); */
  /////////////

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home Restaurantes={restaurantes} />} />
          <Route path="/restaurant" element={<RestaurantLayout />}>
            <Route
              index
              element={<RestaurantList restaurantes={restaurantes} />}
            />
            <Route path=":id" element={<Restaurante  />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
