import styled from "styled-components";

interface iStyleHeaderProps {
    
}

export const StyledHeader = styled.div<iStyleHeaderProps>`

    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 900px;

    div{
        display: flex;
        gap: 20px;
    }


`

export const StyledHeaderDiv = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

`