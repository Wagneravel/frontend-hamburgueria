import styled from "styled-components";

export const StyleComponentSearsh = styled.div`

    border: 1px solid black;
    height: 50px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px;
    background-color: white;


    input{
        height: 100%;
        width: 100%;
        border: none;
        padding-left: 10px;
        border-radius: 8px;
    }

    && > button{
        height: 100%;
        background-color: #27ae60;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        padding: 10px;
        display: flex;
        align-items: center;
    }

`