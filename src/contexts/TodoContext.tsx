import { Children, createContext, useState, type ReactNode } from "react";
import { TODOLISTA, type AllapotTipus, type TodoTipus } from "../adat";

interface FeladatokContextValue {
    lista: TodoTipus[],
    setAllapot: (index:number, allapot:AllapotTipus)=>void
}

export const TodoContext=createContext<FeladatokContextValue | undefined>(undefined)

interface TodoProvider{
    children:ReactNode
}
export function TodoProvider({ children }:TodoProvider){
    const [lista, setLista] = useState<TodoTipus[]>(TODOLISTA);
      function setAllapot(index:number, allapot:AllapotTipus) {
        console.log(index, allapot)
        /* 3 lépés */
        const ujLista:TodoTipus[]=[...lista]
        ujLista[index].allapot=allapot
        setLista(ujLista)
      }
    return (
        <TodoContext.Provider value={{lista,setAllapot}}>{children}</TodoContext.Provider>
    )
    
    const {setAllapot}=useContexts(TodoContext);
        if (context == undifined) {
            throw new Error("Az App csak preovideren belül használható");
        }
}