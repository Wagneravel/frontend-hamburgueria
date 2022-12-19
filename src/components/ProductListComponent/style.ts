import styled from "styled-components";

interface iStyleListProps {
    
}

export const StyledList = styled.ul<iStyleListProps>`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    height: 100%;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    flex-wrap: wrap;
    gap: 20px;

    && > li{
        width: 250px;
        height: 350px;
        box-sizing: border-box;
        border: solid 1px black;
        padding: 10px;

        section{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        img{
            max-width: 150px;
            max-height: 150px;
            box-sizing: border-box;
        }

    }

`

export const StyledDivList = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    && > div{
        display: flex;
        align-items: center;
        justify-content: center;

    }



`