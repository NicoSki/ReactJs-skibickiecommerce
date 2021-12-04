import React, { useEffect, useContext, useState } from 'react';
import CartProvider, { CartContext } from './CartContext';


const Carrito = () => {

    const [carrito, setCarrito] = useContext(CartContext)
    
   
    let [total, setTotal] = useState(0);

    useEffect(() => {
        let final = 0;
        carrito.map((item) => (
            final = final + item.precio
        ))
        setTotal(final)
    }, [])

    //pendiente
    // function eliminar(){
        
    // }


    

    return (
        <>
            <h1>Carrito</h1>
            <button>Borrar todo</button>
            {
                carrito.map((item) => (
                    <div key={item.id} className="carrito">
                        <h1>{item.titulo}</h1>
                        <h3>{item.categoria}</h3>
                        <img src={item.img}  alt="img"/>
                        <p>$ {item.precio}</p>
                        <button>Eliminar</button>
                    </div>
                ))
            }

            <h2>Total a pagar = $ {total}</h2>
        </>
    )
}

export default Carrito
