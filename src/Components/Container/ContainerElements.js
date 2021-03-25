import styled from "styled-components"

export const WrappAll = styled.div`
    width: 100%;
    height: fit-content;
    margin-left: ${({ isOpen }) => (isOpen ? '200px' : '0')};

    @media (max-width: 1350px){
        margin-left: ${({ isOpen }) => (isOpen ? '0' : '0')};
    }
`