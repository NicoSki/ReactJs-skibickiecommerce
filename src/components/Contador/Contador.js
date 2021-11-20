//en este apartado voy a crear un contador para las hamburguesas:

import {useState} from 'react'



const Carta = ({inital, max, onAdd}) => {
    const [count, setCount] = useState(0);

    function Sumar(){
        if(count < 5)
        setCount(count + 1)
      }
    
      function Restar(){
        if(count > 0){
          setCount(count - 1)
        }
      }

      function Agregar(){
        onAdd(count)
        setCount(0)
      }

    return(
      <>
            <section>
              <button onClick={Restar}>-</button>
              {count}
              <button onClick={Sumar}>+</button>
            </section>
            <button onClick={Agregar}>Agregar</button>
      </>
    )
  }
  
  export default Carta;
