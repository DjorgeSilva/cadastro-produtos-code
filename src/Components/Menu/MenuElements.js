import styled from "styled-components"

export const Container = styled.div`
    width: 350px;
    height: 100vh;
    background: ${props => props.theme.ternary_color};   
    position: fixed;
    top: 0px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    z-index: 10;
    box-shadow: 5px 5px 10px #000;

    @media (max-width: 400px){
        width: 300px;
    }


    nav{
        width: 100%;
        height:93vh;
        position: absolute;
        bottom: 0;

        ul{
            width: 100%;
            height: 100%;
            list-style: none;
            margin-left: 0;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
            
        
            li{
                cursor: pointer;
                width: 100%;
                height: 100%;
                border: 1px solid #000;
                border-left: none;
                border-right: none;
                padding: 0 5px;
                
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover > .box-icon .icon{
                    color: #ff0000;
                }

                &:hover > .box-txt p{
                    color: #ff0000;
                }

                &:hover{
                    background-color: #fff;
                }

                .box-icon{
                    width: 20%;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    z-index: 10;
                
                    

                    .icon{
                        color:  ${props => props.theme.primary_color};
                        font-size: clamp(2.5rem, 2.5vw, 3rem);
                    }
                }

                .box-txt{
                    width: 80%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    p{
                        padding-top: 22px;
                        font-size: clamp(1.2rem, 2.5vw, 1.1rem);
                        text-transform: uppercase;
                        color: #000;
                        font-weight: bold;
                        margin-right: 30px;
                    }
                }
            }
        }
    }

    `
export const Nav = styled.nav`
    width: 100%;
    height: fit-content;
    
`