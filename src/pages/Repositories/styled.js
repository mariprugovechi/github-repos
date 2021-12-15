import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0px auto;
    justify-content: center;
    min-height: 100vh;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #fff;
    margin: 5rem 0 2.5rem;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .7rem 0;
    background-color: #F6F8FA;
    color: #000;
    padding: .7rem;
    border-radius: .25rem;
    font-weight
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2.5rem auto 5rem;
    background-color: #2C974B;
    border-radius: .25rem;
    padding: 10px 15px;
    color: #fff;
    text-decoration: none;
    font-size: .9rem;
    font-weight: 700;
`