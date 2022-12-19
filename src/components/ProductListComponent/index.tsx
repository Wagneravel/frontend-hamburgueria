import { useContext } from "react"
import { DashBoardContext } from "../../contexts/DashBoardContext"
import { StyledDivList, StyledList } from "./style"

export function ListProduct(){
    const {busca, addProductCar} = useContext(DashBoardContext)


    interface iCardList {
        name: string,
        category: string,
        price: number,
        id: number
        img: string
    }

    return(
        <StyledDivList >
            <div>
                <StyledList >

               { busca.map((element:iCardList, index) => (
                    <li  key={index}>
                        <section >
                        <img  alt='imagem' src={element.img} />
                        </section>
                        <div >
                            <h3>{element.name}</h3>
                            <h5>{element.category}</h5>
                            <p>R${element.price}</p>
                            <button onClick={ () => addProductCar(element.id)} type='button'>Adicionar</button>
                        </div>
                    </li>
                ))
                }
                </StyledList>
            </div>
        </StyledDivList>
    )

}