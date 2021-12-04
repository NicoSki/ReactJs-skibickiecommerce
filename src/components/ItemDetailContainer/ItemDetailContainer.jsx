import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import itemPromise from "../ArrayDeInfo/Item";
import Contador from "../Contador/Contador";
import { CartContext } from "../CartContext/CartContext";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);


    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            itemPromise
                .then((res) => setInfo(res.find((e) => e.id === parseInt(id))))
                .finally(() => setLoading(false));
        }, 2000)
    }, [id])





    //en esta parte voy a agregar la logica del carrito
    const [carrito, setCarrito] = useContext(CartContext)

function agregar(){
 console.log(info);
 const temporal = carrito;
 temporal.push(info);
 setCarrito(temporal);
 console.log(carrito);
}


    //aca termina la logica del carrito


    return (
        <div className="detail">
            {loading ? <h2>Cargando...</h2> :
                <>
                    <h1>{info.titulo}</h1>
                    <img src={info.img} alt="img"/>
                    <p>{info.categoria}</p>
                    <Contador />
                    <button onClick={agregar}>Agregar</button>
                </>
            }

            

        </div>
    )
}

export default ItemDetailContainer


