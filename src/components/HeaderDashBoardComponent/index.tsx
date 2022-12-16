import { useContext } from 'react';
import { DashBoardContext } from '../../contexts/DashBoardContext';
import Logo from '../../MaskGroup.png';

export function HeaderHome(){
    const {logOut} = useContext(DashBoardContext)
    return(
        <div>
            <header>

                <img alt='Logo' src={Logo} />
                <button onClick={logOut}>Sair</button>
                
            </header>
        </div>
    )
}