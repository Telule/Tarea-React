import React from 'react'

export default function ButtonCarga(props) {


    // FORMA 1

 /*
    if(props.Cargando === true){
        return (
            <div>
                <button>Cargando</button>
            </div>
        )
    }else {
        return (
            <div>
                <button>Listo</button>
            </div>
        )
    }
    */

    // FORMA 2
    
    return (
        <div>
             {props.Cargando===true ? <button>Cargando</button> : <button>Listo</button>}
        </div>
    )

  
  
}
