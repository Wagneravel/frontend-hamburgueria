export function SearchHome(){
    





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