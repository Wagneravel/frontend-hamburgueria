import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DashBoardContext } from '../../contexts/CartContext';
import Logo from '../../MaskGroup.png';
import { SearchHome } from '../SearshComponent';
import { StyledHeader, StyledHeaderDiv } from './style';

export function HeaderHome(){
    const {logOut, setCurrentModal} = useContext(DashBoardContext)

    

    return(
        <StyledHeaderDiv>
            <StyledHeader>
                
                <img alt='Logo' src={Logo} />
                
                
                <div>
                    <SearchHome />
                    <button onClick={()=> setCurrentModal(true)}>Cart</button>
                    <Link onClick={logOut} to='/' >Sair</Link>
                </div>
               
                
            </StyledHeader>
        </StyledHeaderDiv>
    )
}




