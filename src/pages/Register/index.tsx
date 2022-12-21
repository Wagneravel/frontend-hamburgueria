import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Logo from '../../MaskGroup.png';
import { formSchema } from '../../services/valid/registerSchema';
import { iDataRegister, UserContext } from '../../contexts/UserContext';
import Cart from '../../shopping-bag.png';
import { StyleComponentPageRegister } from './style';


const Registrando= ()=> {

    const {onSubmitFunctionRegister} = useContext(UserContext)
    
    const { register, handleSubmit, formState: { errors } } = useForm <iDataRegister >({
        resolver: yupResolver(formSchema),
    });

    return(
        <StyleComponentPageRegister>
            
            <section>

                <img alt='Logo' src={Logo} />

                <div>
                    <div><img alt='img carrinho' src={Cart} /></div>
                    <h5>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</h5>
                </div>
                    


            </section>
            
            
            <form  onSubmit={handleSubmit(onSubmitFunctionRegister)} >

                <div>
                    <h3>Crie sua conta</h3>
                    <Link  to='/' >ir para Login</Link>
                </div>
                
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

            
       </StyleComponentPageRegister>
    )
};
export default Registrando;