import styled from "styled-components";

export const Button = styled.button`
    width: 327px;
    height: 48px;
    background: #32cd32;
    border-radius: 25px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f4f4f4;
    align-self: center;
    margin-top: 24px;
    cursor: pointer;
    border: none;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }
`;
