//en este apartado voy a crear un contador para las hamburguesas:

import {useState} from 'react'
//import {Link} from "react-router-dom";





const Contador = ({inital, max}) => {
    const [count, setCount] = useState(1);
    //agrego el evento intercambiabilidad en los botones
   // const [botones, setBotones ] = useState('button')

  
  //   const parameter=()=>{
  //     setBotones('nobutton')
  //     console.log(count +" unidades")
  // }


    function Sumar(){
        if(count < 5)
        setCount(count + 1)
      }
    
      function Restar(){
        if(count >= 1){
          setCount(count - 1)
        }
      }

      // function Agregar(){
      //   // onAdd(count)
      //   // setCount(0)
      //   console.log("terminaste la compra y te vas al carrito")
      // }


      // //creo las funciones de los botones
      // const BotonAgregar = ({parameter}) => {
      //   return <button onClick={parameter}>Agregar</button>
      
      // }

      // const BotonCarrito= () => {

      //   return <button onClick={Agregar}>Terminar Compra</button>
      // }

    
    return(
      <>
            <section>
              <button onClick={Restar}>-</button>
              {count}
              <button onClick={Sumar}>+</button>
            </section>

            {/* creo la logica para los botones */}         

            {/* { botones === 'button' ? <BotonAgregar parameter={parameter} /> :
            
            <Link to="/cart">
                         <BotonCarrito /> 
            </Link>
            }  */}

      </>
    )
  }
  
  export default Contador;
