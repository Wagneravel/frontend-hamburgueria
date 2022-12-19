import { useContext } from 'react';
import { DashBoardContext } from '../../contexts/DashBoardContext';

export function CarTotalBtnClearCart(){

    
    const {clearCart, total} = useContext(DashBoardContext)
   
    return (
        <section className='div-total-valor'>

            <div className='total-valor'>
                <h5>Total:</h5> <h5>R${total.toFixed(2)}</h5>
                        
            </div>

            <button onClick={clearCart}   type='button'>Limpar e fechar Carrinho</button>
        </section>

    )
}