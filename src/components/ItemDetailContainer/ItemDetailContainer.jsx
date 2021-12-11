import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Contador from "../Contador/Contador";
import getFirestore from "../FireBase/Firebase";
import { CartContext } from "../CartContext/CartContext";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);


    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        setTimeout(() => {
            // itemPromise
            //     .then((res) => setInfo(res.find((e) => e.id === parseInt(id))))
            //     .finally(() => setLoading(false));
            const db = getFirestore()
            const dbQuery = db.collection("productos").doc(id)
            dbQuery.get()
            .then(res => setInfo( { id: res.id, ...res.data() } ))
            .finally(() => setLoading(false))
        }, 2000)
    }, [id])

    //console.log(info);





    //en esta parte voy a agregar la logica del carrito
    const [carrito, setCarrito] = useContext(CartContext)

    function agregar() {
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
                    <h1>{info.nombre}</h1>
                    <img src={info.img} alt="img" />
                    <p>{info.categoria}</p>
                    <p>{info.precio}</p>
                    <Contador />
                    <button onClick={agregar}>Agregar</button>
                </>
            }



        </div>
    )
}

export default ItemDetailContainer


