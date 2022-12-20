import styled from "styled-components";

export const StyleComponentPageLogin = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 50px;
    width: 100vw;
    height: 100vh;

    section{
        width: 500px;
        height: 500px;
        display: flex;
        
        justify-content: center;
        flex-direction: column;

        img{
            max-width: 250px;
        }

        div{
            
            display: flex;
            align-items: center;
            gap: 30px;
            border: 1px solid bisque;
            padding: 20px;
            margin-top: 10px;


            h5{
                max-width: 300px;
            }

        }

    }

    form{
        width: 500px;
        height: 500px;
        border: 1px solid bisque;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        a{
            width: 90%;
            height: 50px;
            text-decoration: none;
            color: green;
            font-size: larger;
            font-weight: 600;
            background-color: bisque;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
        }

        input{
            width: 90%;
            height: 50px;
            border-radius: 8px;
            border: 1px solid green;
            padding-left: 10px;
        }

        button{
            width: 90%;
            height: 50px;
            border-radius: 8px;
            background-color: green;
            color: white;
            border: none;
        }

        div{
            width: 90%;
        }

    }


`