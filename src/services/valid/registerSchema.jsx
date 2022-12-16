import * as yup from 'yup';

export const formSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    name: yup.string().required('Nome obrigatório'),
    password: yup.string().required('Campo obrigatório').min(6, 'A senha deve ter no minimo 6 caracteres').matches(/\W|_/,'Deve conter um caracter especial').matches(/[\d,]/, 'Sua senha deve conter pelo menos 1 numero'),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Suas senhas não são iguais')
    
});