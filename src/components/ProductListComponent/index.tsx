import { useContext } from "react"
import { DashBoardContext } from "../../contexts/DashBoardContext"

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
        <div >
            <div >
                <ul >

               { busca.map((element:iCardList, index) => (
                    <li  key={index}>
                        <section >
                        <img  alt='oi' src={element.img} />
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
                </ul>
            </div>
        </div>
    )

}