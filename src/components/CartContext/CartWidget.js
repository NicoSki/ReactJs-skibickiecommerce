import React, {useContext} from 'react';
import { CartContext } from './CartContext';





//en este apartado voy a crear el contador de los productos del carrito

const CartWidget = () => {
    const [carrito] = useContext(CartContext)

    return (
        <div>
            {carrito.length}
        </div>
    )
}

//lo llevo al navbar

export default CartWidget
