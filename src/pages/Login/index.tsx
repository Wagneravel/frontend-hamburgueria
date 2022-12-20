import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Logo from '../../MaskGroup.png';
import { iDataLogin, UserContext } from '../../contexts/UserContext';
import { formSchema } from '../../services/valid/loginSchema';
import Cart from '../../shopping-bag.png';
import { StyleComponentPageLogin } from './style';

const Logando = () => {
    const {onSubmitFunctionLogin} = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm <iDataLogin>({
        resolver: yupResolver(formSchema),
    });


    return(

        <StyleComponentPageLogin>
            

            <section>
                <img alt='Logo' src={Logo} />
                <div>
                    <div><img alt='img carrinho' src={Cart} /></div>
                    <h5>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</h5>
                </div>
                               

            </section>
            
            <form className='form' onSubmit={handleSubmit(onSubmitFunctionLogin)} >
                <div>
                  <h3>Login</h3>
                </div>
                
                
                <input  type='email' placeholder='Insira seu email' {...register('email')} />
                {<p>{errors.email?.message}</p>}
                
                <input  type="password" placeholder='Insira sua senha' {...register('password')} />
                {<p>{errors.password?.message}</p>}

                <button type='submit'>Entrar</button>

                <h5>Ainda não possui cadastro?</h5>
                <Link  to='/register' >Cadastre-se</Link>
            </form>
            
        </StyleComponentPageLogin>
    )

};

export default Logando;