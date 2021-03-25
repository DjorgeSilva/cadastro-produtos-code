import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        width: 100%;
        font-size: clamp(1.2rem, 2.5vw, 2rem);
        text-transform: uppercase;
        text-align: center;
        color: ${props => props.theme.ternary_color};
        margin-bottom: 30px;
    }



    form{
        width: 100%;
        height: fit-content;
        padding: 30px 15px;
        background: ${props => props.theme.ternary_color};

        display: flex;
        justify-content: center;
        flex-direction: column;

        @media (max-width: 750px){
            width: 100%;
        }

        h1{
            text-align: center;
            text-transform: uppercase;
        }

        label{
            margin-top: 20px;
            font-weight: bold;
        }
        input, 
        textarea,
        select{
            width: 100%;
            outline: none;
            padding-left: 10px;
        }
        input,
        select{
            height: 35px;
        }
        textarea{
            padding-top: 15px;
        }
        button{
            width: 200px;
            margin: 0 auto;
            margin-top: 20px;
            padding: 10px 0;
            border: none;
            background: black;
            color: ${props => props.theme.ternary_color};
            
            &:hover{
                background: #fff;
                color: #000;
            }
        }

    }
`
