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