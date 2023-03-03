import styled from "styled-components";
import Bg from "./assets/bgimage.jpg";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("${Bg}");
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Header = styled.header`
    width: 100%;
    height: 66px;
    background: #1e90ff;
    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 18px;
    color: #f4f4f4;
`;

export const Select = styled.select`
    width: 327px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    appearance: none;
    outline: none;
    border: none;
    display: block;
    align-self: center;
`;

export const InputLabel = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #777777;
    margin-left: 24px;
    margin-top: 24px;

    span {
        font-weight: bold;
    }
`;

export const Option = styled.option`
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #555555;
    height: 200px;
`;

export const Input = styled.input`
    width: 327px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    outline: none;
    border: none;
    display: block;
    align-self: center;
`;

export const DivConvert = styled.div`
    width: 327px;
    height: 276px;
    left: 24px;
    top: 458px;

    border: 1px solid #1b83e2;
    border-radius: 4px;
    align-self: center;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DivContent = styled.div`
    height: 251px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #777777;
`;

export const ParagraphValue = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    color: #1b83e2;
`;
