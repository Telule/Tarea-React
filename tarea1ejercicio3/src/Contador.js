import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Contador() {


    let [Current, setCurrrent] = useState(0)
    let [Previous, setPrevious] = useState(Current)
    
    //PUEDO REALIZARLO REALIZANDO USE EFFECT QUE ES LO MISMO SIN EMBARGO ES MAS CODIGO
    /*
    useEffect(() => {

        if (Current === 0) {
            setPrevious(0)
        } else {
            setPrevious(Current - 1)
        }

    }, [Current])
*/


    function Incrementar() {
        setPrevious(Current)
        setCurrrent(Current + 1)
    }

    return (
        <div>

            <h1>Current count : {Current} </h1>
            <h1>Previous count : {Previous}</h1>
            <button onClick={Incrementar}>Increment</button>


        </div>
    )
}
