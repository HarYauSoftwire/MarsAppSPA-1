import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 100px repeat(5, 1fr) 100px;
    justify-items: center;
    align-items: center;
`;

export const ArrowButton = styled.button`
    font: inherit;
    font-size: 60px;
    width: 80%;
    height: 100%;
    padding: 0.25em 0.25em;
    border: 2px solid slategrey;
    border-radius: 3px;
`;
