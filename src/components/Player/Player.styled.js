import styled from 'styled-components'

export const PlayerWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ isPlayerActive }) => isPlayerActive ? "yellow" : "grey"};
    top: 50%;
    transform: translateY(-50%);
    ${({ side }) => side}: 4rem;

    @media (max-width: 768px) {
        position: static;
        transform: none;
        margin: 1rem 0;
    }
`