import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Hamburguesas from "./components/items/Hamburguesas";
import Papas from "./components/items/Papas";
import Bebidas from "./components/items/Bebidas"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartProvider from './components/CartContext/CartContext';
import Carrito from "./components/CartContext/Carrito"






//primero creo las carpetas de components y container

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <>  
      <NavBar />

    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/hamburguesas" element={<Hamburguesas />} /> 
      <Route exact path="/papas" element={<Papas />} />
      <Route exact path="/bebidas" element={<Bebidas />} /> 
      <Route exact path="/detalle/:id" element={<ItemDetailContainer />} />   
      <Route exact path="/carrito" element={<Carrito />} />  
    </Routes>
    </>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
