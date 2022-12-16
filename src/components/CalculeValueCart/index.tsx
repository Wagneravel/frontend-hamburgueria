import { useState, useEffect } from 'react';

export function CarTotalBtn(){
   
    return (
        <section className='div-total-valor'>

            <div className='total-valor'>
                <h5>Total:</h5> <h5>R${total.toFixed(2)}</h5>
                        
            </div>

            <button onClick={clearCart} type='button'>Limpar Carrinho</button>
        </section>

    )
}