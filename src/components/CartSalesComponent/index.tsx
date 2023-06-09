import { useContext } from 'react';
import { DashBoardContext } from '../../contexts/CartContext';
import { CarTotalBtnClearCart } from '../CalculeValueCart';
import { StyleComponentModal, StyleContador, Stylehead, StyleListCart, StyleModalBox } from './style';



export function ListCart(){


    const { productCart, RemoveCard, setCurrentModal } = useContext(DashBoardContext)


    return(
        <StyleComponentModal>
            <StyleModalBox>
                
                <main >
                
                    <Stylehead>
                        
                        <h3>Carrinho de Compras</h3>
                        <button onClick={()=> setCurrentModal(false)}>fechar</button>

                    </Stylehead>
                    

                    <StyleListCart>

                    {(productCart.length > 0)?
                        productCart.map((element)=>(
                        
                        <li key={element.id} className='li-carrinho'>
                            <div className='div-img-carrinho'>
                                <img className='img-cart' alt={element.name} src={element.img} />
                            </div>
                            <section className='div-info-carrinho'>
                                <h4>{element.name}</h4>
                                <h5>{element.category}</h5>
                                <StyleContador>
                                    <button onClick={()=>console.log("+1")}  type='button'>+</button>
                                    <p>{element.qtd}</p>
                                    <button onClick={()=>console.log("-1")} type='button'>-</button>
                                </StyleContador>
                            </section>
                            <button onClick={ () => RemoveCard(element.id)} type='button'>remover</button>
                        </li>
                    )):
                        (<h1>Carrinho está vazio!</h1>)
                    }
                    </StyleListCart>
                    

                </main>

                <CarTotalBtnClearCart />
            </StyleModalBox>
        </StyleComponentModal>
    )



}