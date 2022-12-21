import styled from "styled-components";

export const StyleComponentModal = styled.section`


    
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid white;
    border-radius: 8px;
    margin: 10px;
    padding-bottom: 20px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: green;
        font-size: larger;
        width: 80%;

    }

    && > button{
        width: 80%;
        height: 40px;
        background-color: bisque;
        color: red;
        border: 1px solid red;
        font-weight: 600;
        
        border-radius: 8px;
    }



`