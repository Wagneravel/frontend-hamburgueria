import { useContext } from 'react';
import { DashBoardContext } from '../../contexts/DashBoardContext';



export function ListCart(){


    const { productCart, RemoveCard } = useContext(DashBoardContext)
    

        

    return(
        <div>
            <main className='componentContainerCTB'>
                <h3>Carrinho de Compras</h3>

                <ul className='ul-carrinho'>

                   {(productCart.length > 0)?
                    productCart.map((element)=>(
                    
                    <li key={element.id} className='li-carrinho'>
                        <div className='div-img-carrinho'>
                            <img className='img-cart' alt={element.name} src={element.img} />
                        </div>
                        <section className='div-info-carrinho'>
                            <h4>{element.name}</h4>
                            <h5>{element.category}</h5>
                            
                        </section>
                        <button onClick={ () => RemoveCard(element.id)} type='button'>remover</button>
                    </li>
                )):
                     (<h1>Carrinho está vazio!</h1>)
                }
                </ul>
                

            </main>
        </div>
    )



}