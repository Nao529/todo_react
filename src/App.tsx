import { useState } from 'react'
import './App.css'
import { TODOLISTA, type AllapotTipus, type TodoTipus } from './adat'
import Feladatok from './components/Feladatok';

function App() {
  const [lista, setLista] = useState<TodoTipus[]>(TODOLISTA);
  function setAllapot(index:number, allapot:AllapotTipus) {
    console.log(index, allapot)
    /* 3 lépés */
    const ujLista:TodoTipus[]=[...lista]
    ujLista[index].allapot=allapot
    setLista(ujLista)

  }

  return (
    <>
      <header><h1>Todo</h1></header>
      <article>
        <Feladatok lista={lista} setAllapot={setAllapot}/>
      </article>
      <footer><p>Készítette: Nao</p></footer>
    </>
  )
}

export default App
