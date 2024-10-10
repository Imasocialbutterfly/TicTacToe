import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 2rem;
    text-align: center;
    box-sizing: border-box;
`

export const Title = styled.h1`
    color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.text};
    font-size: 3rem;
    font-family: 'Pacifico', cursive;
    background-color: transparent;
`

export const Subtitle = styled.h1`
    color: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: 200;
    background-color: transparent;
`