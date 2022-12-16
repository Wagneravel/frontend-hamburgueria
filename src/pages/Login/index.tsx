import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Logo from '../../MaskGroup.png';
import { iDataLogin, UserContext } from '../../contexts/UserContext';
import { formSchema } from '../../services/valid/loginSchema';

const Logando = () => {
    const {onSubmitFunctionLogin} = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm <iDataLogin>({
        resolver: yupResolver(formSchema),
    });


    return(

        <div>
            <img alt='Logo' src={Logo} />
            <h3>Login</h3>
            <form className='form' onSubmit={handleSubmit(onSubmitFunctionLogin)} >

                
                <input  type='email' placeholder='Insira seu email' {...register('email')} />
                {<p>{errors.email?.message}</p>}
                
                <input  type="password" placeholder='Insira sua senha' {...register('password')} />
                {<p>{errors.password?.message}</p>}

                <button type='submit'>Entrar</button>
            </form>
            <h5>Ainda não possui cadastro?</h5>
            <Link  to='/register' >Cadastre-se</Link>
        </div>
    )

};

export default Logando;