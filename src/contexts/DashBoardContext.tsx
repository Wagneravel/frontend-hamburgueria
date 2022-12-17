import { createContext, ReactNode, useEffect } from 'react'; 
import { api } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { string } from 'yup/lib/locale';
import { Console } from 'console';
import { UserContext } from './UserContext';
import { number } from 'yup';



// {
//     "id": 1,
//     "name": "Hamburguer",
//     "category": "Sanduíches",
//     "price": 14,
//     "img": "https://i.imgur.com/Vng6VzV.png"
// }

interface iItemCart {
    id: number,
    name: string,
    category: string,
    price: number,
    img: string

}



interface iDashBoardProviderProps {
    children: ReactNode,
}

interface iDashBoardContextTypes {
    logOut: () => void
    clearCart: () => void
    total:number
    productCart: iItemCart[]
    setProductCart: {}
    RemoveCard: (id:number) => void
    addProductCar: (id:number) => void
    busca: iItemCart[]
    setBusca:{}
    filtrando: ( valor: string) => void
   

}

export const DashBoardContext = createContext({} as iDashBoardContextTypes );


export const DashBoardProvider = ({children}: iDashBoardProviderProps) => {
    
    const navigate = useNavigate(); 
    const tokenLS = localStorage.getItem('tokenUser')

    const {user, setUser} = useContext(UserContext)
    const [userLogged, setUserLogged]= useState({});
    const [productCart, setProductCart] = useState([])

    const [InputSeach, setInputSeach]= useState("")
    const [listaApi, setlistaApi]= useState([]) 
    const [NovaLista, setNovaLista] = useState(listaApi)
    const [busca, setBusca]= useState(NovaLista)

   

    useEffect(()=>{
        api.get("/").then((response)=>{
         const novosProdutos = response.data
         setlistaApi(novosProdutos)
         setNovaLista(novosProdutos)
         setBusca(novosProdutos)
   
        })
    },[])


    function addProductCar(id:number){
    

        const item = NovaLista.find((product)=>product.id === id)
        
    
        if(productCart.some((elemento) => elemento.id === id)){
          return toast.success("Já adicionou esse item ao carrinho")
        }
    
        setProductCart([...productCart, item])
    }



    function filtrando(valor: string){


        if(InputSeach.length ===1){setBusca(NovaLista)}

        const produtoFiltrado = NovaLista.filter((produto: iItemCart)=> produto.name.toLowerCase().includes(valor.toLowerCase()) ) 
          
          
        setBusca(produtoFiltrado)
    }





    function RemoveCard(id:number){
        
        
        const arrayFiltered = productCart.filter(
            (product)=>product.id!== id
        )
        setProductCart(arrayFiltered)
    }








    const total = productCart.reduce((acc:number, item: iItemCart) => {
        const valorDeCadaItem = item.price
        return (acc + Number(valorDeCadaItem))

    }, 0)

    function clearCart(){
        setProductCart([])
        
    }

    const logOut = () =>{
        if(tokenLS){
        localStorage.clear()
        setUserLogged("")
        }
        navigate("/")

    }

    return(


        <DashBoardContext.Provider value={{logOut, clearCart, total, productCart, setProductCart, RemoveCard, busca, setBusca, addProductCar, filtrando}}>
            {children}
        </DashBoardContext.Provider>


    )
}