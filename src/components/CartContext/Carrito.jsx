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
    }, [carrito])


    const eliminar = (titulo) => {
        const filtro = carrito.filter(e => e.titulo !== titulo)
        setCarrito(filtro)
        console.log(carrito);
    }




    return (
        <>
            <h1>Carrito</h1>
            {
                carrito.map((item) => (
                    <div key={item.id} className="carrito">
                        <h1>{item.titulo}</h1>
                        <h3>{item.categoria}</h3>
                        <img src={item.img} alt="img" />
                        <p>$ {item.precio}</p>
                        <button onClick={() => eliminar(item.titulo)}>Eliminar</button>
                    </div>
                ))
            }

            {
                total === 0 ? <h2>No agregaste ningun producto</h2> : <h2>Total a pagar = $ {total}</h2>
            }

        </>
    )
}

export default Carrito
