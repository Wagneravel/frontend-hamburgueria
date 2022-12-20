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
    img: string,
    qtd?: number

}



interface iDashBoardProviderProps {
    children: ReactNode,
}

interface iDashBoardContextTypes {
    logOut: () => void
    clearCart: () => void
    total:number
    productCart: iItemCart[] 
    setProductCart: React.Dispatch<React.SetStateAction<iItemCart[]>>
    RemoveCard: (id:number) => void
    addProductCar: (id:number) => void
    busca: iItemCart[]
    setBusca:{}
    filtrando: ( valor: string) => void
    NovaLista: iItemCart[]
    setNovaLista:{}
    currentModal:boolean
    setCurrentModal: React.Dispatch<React.SetStateAction<boolean>>
    contadorr: number
    setContadorr: React.Dispatch<React.SetStateAction<number>>
    

   

}

export const DashBoardContext = createContext({} as iDashBoardContextTypes );


export const DashBoardProvider = ({children}: iDashBoardProviderProps) => {
    
    const navigate = useNavigate(); 
    const tokenLS = localStorage.getItem('tokenUser')

    const {user, setUser} = useContext(UserContext)
    const [userLogged, setUserLogged]= useState({});

    const [productCart, setProductCart]  = useState([] as iItemCart[])

    const [InputSeach, setInputSeach]= useState("")
    const [listaApi, setlistaApi]= useState([]) 
    const [NovaLista, setNovaLista] = useState(listaApi)

    const [busca, setBusca]= useState(NovaLista)

    const [currentModal, setCurrentModal]=useState(false)

    const [contadorr, setContadorr]=useState(1)
    

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
        if(!item){
            return 
        }
    
        if(productCart?.some((elemento: iItemCart) => elemento.id === id)){
           toast.success("Contador do carrinho somando mais 1")

           
        }
    
        console.log(id)
        const newProductCart = [...productCart, item]
        setProductCart(newProductCart)
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
        setCurrentModal(false)
        
    }

    const logOut = () =>{
        if(tokenLS){
        localStorage.clear()
        setUserLogged("")
        }
        navigate("/")

    }

    return(


        <DashBoardContext.Provider value={{logOut, clearCart, total, productCart, setProductCart, RemoveCard, busca, setBusca, addProductCar, filtrando, NovaLista, setNovaLista, currentModal, setCurrentModal, contadorr, setContadorr}}>
            {children}
        </DashBoardContext.Provider>


    )
}