import styled from "styled-components";

interface iStyleListProps {
    
}

export const StyledList = styled.ul<iStyleListProps>`

    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
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
        border: 1px solid bisque;
        border-radius: 8px;

        :hover{
            border: 1px solid green;
        }
        


        section{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            background-color: bisque;
            border-radius: 8px 8px 0 0;
        }

        img{
            max-width: 150px;
            max-height: 150px;
            box-sizing: border-box;
        }

        div{
            padding: 10px;

            button{
                border: none;
                background-color: bisque;
                padding: 8px 20px;
                border-radius: 8px;

                :hover{
                    background-color: green;
                    color: white;
            
                }
            }

            h3{
                margin: 5px;
            }
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