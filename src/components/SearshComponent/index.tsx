import { useContext } from "react"
import { DashBoardContext } from "../../contexts/CartContext"
import { StyleComponentSearsh } from "./style"

export function SearchHome(){
    
    const {filtrando} = useContext(DashBoardContext)

    return(
                
        <StyleComponentSearsh>
            <input placeholder="Digitar pesquisa" type={"search"}
                
                onChange={(e)=>{
                
                filtrando(e.target.value)
            }
            } />

            <button> Pesquisar </button>
        </StyleComponentSearsh>
        
    )
}