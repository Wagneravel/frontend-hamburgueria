import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Logo from '../../MaskGroup.png';
import { formSchema } from '../../services/valid/registerSchema';
import { iDataRegister, UserContext } from '../../contexts/UserContext';

const Registrando= ()=> {

    const {onSubmitFunctionRegister} = useContext(UserContext)
    


    const { register, handleSubmit, formState: { errors } } = useForm <iDataRegister >({
        resolver: yupResolver(formSchema),
    });

    return(
        <div>
            
            
            <img alt='Logo' src={Logo} />

            <h3>Crie sua conta</h3>
            <p>A vida é como um sanduiche, ...</p>
            
            <form  onSubmit={handleSubmit(onSubmitFunctionRegister)} >
                
                <input type='name' placeholder='Nome' {...register('name')}  />
                {<p>{errors.name?.message}</p>}

                
                <input type='email' placeholder='Email' {...register('email')} />
                {<p>{errors.email?.message}</p>}

                
                <input type='password' placeholder='senha' {...register('password')} />
                {<p>{errors.password?.message}</p>}

                
                <input type='password' placeholder='confirmação senha' {...register('passwordConfirm')} />
                {<p>{errors.passwordConfirm?.message}</p>}

                <button type='submit'>Cadastrar!</button>
            </form>

            <Link  to='/' >ir para Login</Link>
       </div>
    )
};
export default Registrando;