import React from 'react'

export default function Animales() {

    let animales = [
    { id: 1, name: 'fido' },
    { id: 2, name: 'Snowball' },
    { id: 3, name: 'Murph' },
    { id: 4, name: 'Zelda' }
    ]
    
 //Animal ID : {id} , con nombre {name}

    return (
        <div>
            <h1>Listado de Animales</h1>
            {animales.map((objeto,index)=>{ return <p key={index}>Animal ID : {objeto.id} con nombre {objeto.name}</p>})}

        </div>
    )
}
