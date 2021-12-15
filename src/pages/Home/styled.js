import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

export const HomeContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
`;

const rotateAnimation = keyframes`
    from {transform: rotateY(0deg);}
    to {transform: rotateY(360deg);}
`;

export const Imagem = styled.img`
    max-width: 250px;
    animation: ${rotateAnimation} 3s linear infinite;
`;

export const Titulo = styled.h1`
    color: #fff;
    margin: 3rem 0 3rem;
    text-align: center;
`;

export const Content = styled.div`
    width: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 0px solid #ddd;
    height: 2.3rem;
    padding: 0 .7rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 2.3rem;
    border: 0px solid #2C974B;
    background: #2C974B;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    padding: 5px 15px;
    font-weight: 700;
    font-size: .9rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const ErrorMsg = styled.span `
    background-color: #ce0202;
    display: block;
    border-radius: .25rem;
    padding: 5px 10px; 
    font-size: 0.9rem;
    color: #fff;
    font-weight: 500;
    margin-top: 1.2rem;
`
