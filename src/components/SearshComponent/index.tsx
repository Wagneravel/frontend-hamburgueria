import { useContext } from "react"
import { DashBoardContext } from "../../contexts/DashBoardContext"

export function SearchHome(){
    

    

    const {filtrando} = useContext(DashBoardContext)

    return(
                
        <div>
            <input placeholder="Digitar pesquisa" type={"search"}
                
                onChange={(e)=>{
                
                filtrando(e.target.value)
            }
            } />

            
        </div>
        
    )
}