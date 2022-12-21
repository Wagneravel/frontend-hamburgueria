import styled from "styled-components";

export const StyleComponentModal = styled.div`

    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    z-index: 99;

    background: rgba(0,0,0,.25);



`

export const StyleModalBox = styled.div`

    background-color: bisque;
    
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;
    border-radius: 12px;
    
    color: white;


`
export const StyleListCart = styled.ul`

    
    height: 100%;
    list-style: none;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 2px solid grey;

    && > h1{
        color: green;
        font-size: 30px;
        text-align: center;
    }
    

    li{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: green;
        box-sizing: border-box;
        

        img{
            width: 100px;
            height: 100px;
        }

        button {
            margin-right: 10px;
        }

        section{

            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 180px;


            h4, h5{
                margin: 0;
            }
        }
    }

`


export const StyleContador = styled.div`

    display: flex;
    gap: 10px;
    margin: 0;
    justify-content: start;
    align-items: center;


    p{
        margin: 0;
        margin-right: 10px;
    }

    button{
        width: 25px;
        height: 25px;
        border-radius: 6px;
        
    }


    


`

export const Stylehead = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: green;
    padding: 0 20px;
    border-radius: 8px 8px 0 0;

   

    && > button{
        padding: 5px 20px;
        border: none;
        background-color: bisque;
        cursor: pointer;
        color: green;
        border-radius: 8px;

    }

`