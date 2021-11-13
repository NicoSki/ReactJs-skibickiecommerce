//Ahora creo mi navbar: en donde voy a incluir tres opciones ya que el proyecto
//esta destinado a una app de comida:
//importo carpeta de css
import React from 'react'
import "./NavBar.css";

const NavBar = () => {
    return (
        <div>
            <ul className="menu">
                <li>Hamburguesas</li>
                <li>Papas</li>
                <li>Bebidas</li>
            </ul>
        </div>
    )
}

//los enlaces(<a></a>) no fueron incluidos ya que no tengo un link
//a donde lo redirija y me tira un error si le pongo "#"
export default NavBar
