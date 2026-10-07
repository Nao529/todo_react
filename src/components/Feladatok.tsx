/* rfce */
import React from 'react'
import Feladat from './Feladat'
import type { AllapotTipus, TodoTipus } from '../adat'

function Feladatok() {
    /* listát a contextből fogjuk megkapni */
    const { lista } = useTodoContext();
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