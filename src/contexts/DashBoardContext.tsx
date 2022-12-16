import { createContext, ReactNode, useEffect } from 'react'; 
import { api } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { string } from 'yup/lib/locale';
import { Console } from 'console';
import { UserContext } from './UserContext';









interface iDashBoardProviderProps{
    children: ReactNode,
}

interface iDashBoardContextTypes{
    logOut: () => void
}

export const DashBoardContext = createContext({} as iDashBoardContextTypes );


export const DashBoardProvider = ({children}: iDashBoardProviderProps) => {
    
    const navigate = useNavigate(); 
    const tokenLS = localStorage.getItem('tokenUser')

    const {User, setUser} = useContext(UserContext)
    const [userLogged, setuserLogged]= useState({});

    // const [ProductCar, setProductCar] = useState([])
    // const [InputSeach, setInputSeach]= useState("")
    // const [listaApi, setlistaApi]= useState([]) 
    // const [NovaLista, setNovaLista] = useState(listaApi)
    // const [Busca, setBusca]= useState(NovaLista)

    // useEffect(()=>{
    //     api.get("/").then((response)=>{
    //      const novosProdutos = response.data
    //      setlistaApi(novosProdutos)
    //      setNovaLista(novosProdutos)
    //      setBusca(novosProdutos)
   
    //     })
    // },[])

    // function addProductCar(id){
    

    //     const item = NovaLista.find((product)=>product.id === id)
        
    
    //     if(ProductCar.some((elemento) => elemento.id === id)){
    //       return toast.success("Já adicionou esse item ao carrinho")
    //     }
    
    //     setProductCar([...ProductCar, item])
    // }

    // function filtrando(valor: string){


    //     if(InputSeach.length ===1){setBusca(NovaLista)}

    //     const produtoFiltrado = NovaLista.filter((produto)=> produto.name.toLowerCase().includes(valor.toLowerCase()) ) 
          
          
    //     setBusca(produtoFiltrado)
    // }

    // function RemoveCar(id){
        
        
    //     const arrayFiltered = ProductCar.filter(
    //         (product)=>product.id !== id
    //     )
    //     setProductCar(arrayFiltered)
    // }

    // const total = ProductCar.reduce((acc, item) => {
    //     return (acc + Number(item.price))

    // }, 0)

    // function clearCart(){
    //     setProductCar([])
        
    // }

    const logOut = () =>{
        if(tokenLS){
        localStorage.clear()
        setuserLogged("")
        }
        navigate("/")

    }

    return(


        <DashBoardContext.Provider value={{logOut}}>
            {children}
        </DashBoardContext.Provider>


    )
}