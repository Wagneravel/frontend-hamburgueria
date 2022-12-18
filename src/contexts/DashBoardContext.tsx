import { createContext, ReactNode, useEffect } from 'react'; 
import { api } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { string } from 'yup/lib/locale';
import { Console } from 'console';
import { UserContext } from './UserContext';
import { number } from 'yup';





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
    NovaLista: iItemCart[]
    setNovaLista:{}

   

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

   

    useEffect(() => {
          
        if(!tokenLS){
        
            navigate("/");
        }  
    api
    
        .get("/products", {
            
            headers: {
            'Authorization': `Bearer ${tokenLS}`
          }})

        .then((response) => {

            const novosProdutos = response.data
            console.log(novosProdutos)

            setlistaApi(novosProdutos)
            setNovaLista(novosProdutos)
            setBusca(novosProdutos)
            navigate("/dashboard", {replace:true});
            
            
        })
        .catch((err) => {
           
            navigate("/");
        })
        
    }, []);


    function addProductCar(id:number){
    

        const item = NovaLista.find((product: iItemCart)=>product.id === id)
        
    
        if(productCart.some((elemento: iItemCart) => elemento.id === id)){
          return toast.success("Já adicionou esse item ao carrinho")
        }
    
        // setProductCart([...productCart, item])
    }

    function RemoveCard(id:number){
        
        
        const arrayFiltered = productCart.filter(
            (product:iItemCart)=>product.id!== id
        )
        setProductCart(arrayFiltered)
    }












    function filtrando(valor: string){


        if(InputSeach.length ===1){setBusca(NovaLista)}

        const produtoFiltrado = NovaLista.filter((produto: iItemCart)=> produto.name.toLowerCase().includes(valor.toLowerCase()) ) 
          
          
        setBusca(produtoFiltrado)
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


        <DashBoardContext.Provider value={{logOut, clearCart, total, productCart, setProductCart, RemoveCard, busca, setBusca, addProductCar, filtrando, NovaLista, setNovaLista}}>
            {children}
        </DashBoardContext.Provider>


    )
}