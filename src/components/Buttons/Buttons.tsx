import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    height:10%;
    text-align:center;
    content:'COMPRAR'
    &::before{
        position: absolute;
        font-family: 'Font Awesome 5 Free';
        content: '\f101';
    }
`;
