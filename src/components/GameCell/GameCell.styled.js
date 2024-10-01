import styled from 'styled-components'

export const CellStyle = styled.button`
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    font-size: 3rem;
    width: 8rem;
    height: 8rem;
    border: none;
    border-radius: 2.5rem;
    box-shadow: 5px 10px ${(props) => props.theme.colors.gray};
    cursor: pointer;
    padding: 2rem;

    .outlineIcon {
        path {
            stroke: ${(props) => props.theme.colors.primary};
            stroke-width: 0;
        }
    }

    &:hover {
        .outlineIcon {
            path {
                stroke-width: 2;
            }
        }
    }
`