//en este componenete voy a agregar un icono de la app y el loogo del carrito de compras:
//voy a incorporar bootstrap(iconos) tambien:
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import Carta from '../Contador/Contador';
import "./ItemListContainer.css"



//este apartado deberia estar en item.js pero no hubo forma de poder importarlo 


const Hamburguesas = [
    { id: 1, name: "Rick", pan: "papa", precio: 1000 },
    { id: 2, name: "Morty", pan: "vegetales", precio: 1200 },
    { id: 3, name: "Rick1", pan: "semillas", precio: 1100 },
    { id: 4, name: "Morty1", pan: "cebolla", precio: 1250 }
]

//creo la promesa:
export const menuDeHamburguesas = new Promise((acept, reject) => {

    //dentro de la misma creo la funcion de setTimeOut

    setTimeout(() => {
        acept(Hamburguesas);
    }, 2000)

})

//hasta aca deberia de haber estado en item.js







const ItemListContainer = () => {
    //creo un useState:
    const [showMenu, setShowMenu] = useState(0)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        menuDeHamburguesas
            .then(dat => { setShowMenu(dat) })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    })



    //console.log(Hamburguesas)

    //funcion para el contador
    function onAdd(cantidad){
        console.log(cantidad)
      }

    return (
        <div>
            <Navbar />
            {loading ? <>Cargando...</> : Hamburguesas.map(ham =>

                <div className="card" key={ham.id}>
                    <img src="https://i2.wp.com/www.puro-geek.com/wp-content/uploads/2021/08/rick-morty-season-5.jpg?fit=1200%2C675&ssl=1" className="card-img-top" alt="imagen" />
                    <div className="card-body">
                        <h5 className="card-title">Hamburguesa:{ham.name}</h5>
                        <p className="card-text">Pan de:{ham.pan}</p>
                        <a href="#" className="btn btn-primary">Precio:{ham.precio}</a>
                        <Carta  initial={0} max={5} onAdd={onAdd} />
                    </div>
                </div>)

            }

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg> */}
        </div>
    )
}

export default ItemListContainer
