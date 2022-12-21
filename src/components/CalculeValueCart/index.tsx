import { useContext } from 'react';
import { DashBoardContext } from '../../contexts/DashBoardContext';
import { StyleComponentModal } from './style';

export function CarTotalBtnClearCart(){

    
    const {clearCart, total} = useContext(DashBoardContext)
   
    return (
        <StyleComponentModal>

            <div className='total-valor'>
                <h5>Total:</h5> <h5>R${total.toFixed(2)}</h5>
                        
            </div>

            <button onClick={clearCart}   type='button'>Limpar e fechar Carrinho</button>
        </StyleComponentModal>

    )
}