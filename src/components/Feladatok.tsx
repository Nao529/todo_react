/* rfce */
import React from 'react'
import Feladat from './Feladat'
import type { AllapotTipus, TodoTipus } from '../adat'

interface FeladatokProps {
    lista: TodoTipus[],
    setAllapot: (index:number, allapot:AllapotTipus)=>void
}

function Feladatok(lista, setAllapot) {
  return (
    <div>
        {
            lista.map( (elem, index)=>{
                return (<Feladat elem={lista[0]} setAllapot={setAllapot}
                    index={0} key={index}/>)
            }
            )
        }
    </div>
  )
}

export default Feladatok