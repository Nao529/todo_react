import { useState } from 'react'
import './App.css'
import { TODOLISTA, type AllapotTipus, type TodoTipus } from './adat'
import Feladatok from './components/Feladatok';

function App() {
  
  return (
    <>
      <header><h1>Todo</h1></header>
      <article>
        <Feladatok />
      </article>
      <footer><p>Készítette: Nao</p></footer>
    </>
  )
}

export default App
