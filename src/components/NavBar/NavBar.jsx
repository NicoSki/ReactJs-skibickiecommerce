//Ahora creo mi navbar: en donde voy a incluir tres opciones ya que el proyecto
//esta destinado a una app de comida:
//importo carpeta de css
import React from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom';
import CartWidget from '../CartContext/CartWidget';


const NavBar = () => {

    return (
        <div>
            <ul className="menu">

                <Link to="/hamburguesas">
                    <li><button className="btn btn-dark">Hamburguesas</button></li>
                </Link>

                <Link to="/papas">
                    <li><button className="btn btn-dark">Papas</button></li>
                </Link>

                <Link to="/bebidas">
                    <li><button className="btn btn-dark">Bebidas</button></li>
                </Link>

                <Link to="/">
                    <li><button className="btn btn-dark">Home</button></li>
                </Link>

                <Link to="/carrito">
                    <li>
                        <button type="button" className="btn btn-dark position-relative">
                            🛒
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                <CartWidget />
                            </span>
                        </button>
                    </li>

                </Link>

            </ul>
        </div>
    )
}

//los enlaces(<a></a>) no fueron incluidos ya que no tengo un link
//a donde lo redirija y me tira un error si le pongo "#"
export default NavBar
