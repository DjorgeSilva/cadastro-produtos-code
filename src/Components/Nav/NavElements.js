import styled from "styled-components"

export const Header = styled.div`
    width: 100%;
    height: fit-content;
    background: transparent;
    margin-bottom: 15px;
    z-index: 10000000;

    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 10px;

    .box-img{
        width: 90%;
        height: 100%;

        @media (min-width: 950px){
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 180px;
        }

        img{
            width: 200px;
            float: right;
            margin-left: ${({ isOpen }) => (isOpen ? '400px' : '0')};

            @media (max-width: 1350px){
                margin-left: ${({ isOpen }) => (isOpen ? '0' : '0')};
            }

        }
    }

    .box-icone-menu{
        width: 10%;
        height: fit-content;
        float: left;
        z-index: 10000000;
        position: fixed;
        top: 10px;
        left: 20px;

        .icone-menu{
            cursor: pointer;
            color: ${({ isOpen }) => (isOpen ? '#000' : '#F5C32E')};
            font-size: clamp(2.2rem, 2.5vw, 3rem);
        }

        .icone-menu:hover{
            color: #fff;
        }


    }

`