import { createContext, ReactNode, useEffect } from 'react'; 
import { api } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { string } from 'yup/lib/locale';
import { Console } from 'console';


interface iUserProviderProps{
    children: ReactNode,
}  

export interface iDataLogin{
    email: string ,
    password: string
}

export interface iDataRegister{
    email: string,
    password: string,
    name: string,
    passwordConfirm: string
   
    
}

interface iUser{

    accessToken: string,
    user:{
        id: string,
        name: string,
        email: string
    }
}

interface iUserContextTypes{

   
    setUser: React.Dispatch<React.SetStateAction<iUser>>;
    user: iUser;

    onSubmitFunctionLogin: (data:iDataLogin)=> void;
    onSubmitFunctionRegister: (data:iDataRegister)=> void;

}



export const UserContext = createContext({} as iUserContextTypes );

export const UserProvider = ({children}: iUserProviderProps) => {

    const [user, setUser] = useState({} as iUser)
    console.log(user)

    const navigate = useNavigate(); 

    const onSubmitFunctionLogin = (data: iDataLogin) => {
        
        api
        .post('/login', data)
        .then((response) => {
            
            console.log(response)

            setUser(response.data.user);
            localStorage.setItem('tokenUser' ,response.data.accessToken);
            toast.success('login com sucesso');
            setTimeout(()=>{
                navigate('/dashboard');
            },500)
            
        })
        .catch((err) => {
            console.log(err)
            toast.error('email ou senha incorreta');
        })
        
    };  

    const onSubmitFunctionRegister = (data: iDataRegister) => {
        
        api
        .post('/users', data)
        .then((response) => {
            
            console.log(response)
            
            toast.success('Cadastro realizado com sucesso');
            setTimeout(()=>{
                navigate('/');
            },500)
        })
        .catch((err) => {
           
            toast.error('Cadastro não permitido');
            console.log(err)
        })
    }; 

    return(

        <UserContext.Provider value={{onSubmitFunctionLogin, onSubmitFunctionRegister, setUser, user }}>
            {children}
        </UserContext.Provider>

    )

};