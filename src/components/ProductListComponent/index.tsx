export function ListProduct(addProductCar, Busca:[]){
   

    

    return(
        <div >
            <div >
                <ul >

               { Busca.map((element, index) => (
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