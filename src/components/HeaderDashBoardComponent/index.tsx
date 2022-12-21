import { useContext } from 'react';
import { DashBoardContext } from '../../contexts/DashBoardContext';
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
                    <button onClick={logOut}>Sair</button>
                </div>
               
                
            </StyledHeader>
        </StyledHeaderDiv>
    )
}




