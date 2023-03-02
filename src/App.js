import React, { useEffect, useRef, useState } from "react";
import {
    Container,
    Header,
    Input,
    InputLabel,
    Select,
    Option,
    DivConvert,
    DivContent,
    Paragraph,
    ParagraphValue,
} from "./styles";
import Button from "./components/Button";
import ContainerItens from "./components/ContainerItens";
import axios from "axios";
import ImageCountry from "./components/ImageCountry";
import Vector from "./assets/Vector.png";

const options = [
    {
        id: 1,
        name: "US$ Dolar Americano",
        value: "USD",
    },
    {
        id: 2,
        name: "€ Euro",
        value: "EUR",
    },
    {
        id: 3,
        name: "₿ Bitcoin",
        value: "BTC",
    },
];

function Convert() {
    const [selectValue, setSelectValue] = useState("");
    const [inputValue, setInputValue] = useState(0);
    const [paragraph, setParagraph] = useState("US$ Dolar Americano");
    const [paragraphValue, setParagraphValue] = useState("US$ 2.000,00");

    async function data() {
        if (!selectValue || !inputRef.current.value) {
            alert("valor do select e input indefinido");
            return;
        }
        const { data } = await axios.get(
            `https://api.api-ninjas.com/v1/convertcurrency?want=${selectValue}&have=BRL&amount=${inputRef.current.value}`
        );
        console.log(selectValue);
        console.log(data.new_amount);
        console.log(inputRef.current.value);
        setParagraphValue(data.new_amount);
        return data;
    }

    async function verifySelect(e) {
        setSelectValue(e.target.value);
        // console.log(selectValue);
        if (!selectValue || !inputValue) {
            return;
        }
        let { new_amount: dados } = await data();
        // console.log(dados);
        setParagraphValue(dados);
    }

    function verifyInput(e) {
        setInputValue(e.target.value);
    }

    const inputRef = useRef();

    useEffect(() => {
        async function text() {
            let option = options.find((option) => option.value === selectValue);
            await setParagraph(option.name);
        }
        if (!selectValue) {
            return;
        }
        text();
    }, [selectValue]);
    return (
        <Container>
            <ContainerItens>
                <Header>DevClub Convert Money</Header>
                <InputLabel>
                    Converter <span>de</span>
                </InputLabel>
                <Select>
                    <Option>R$ Real Brasileiro</Option>
                </Select>

                <InputLabel>
                    Converter <span>para</span>
                </InputLabel>
                <Select value={selectValue} onChange={verifySelect}>
                    {options.map((option) => (
                        <Option key={option.id} value={option.value}>
                            {option.name}
                        </Option>
                    ))}
                </Select>

                <InputLabel>Valor</InputLabel>
                <Input
                    onChange={verifyInput}
                    ref={inputRef}
                    placeholder="R$ 10.000,00"
                ></Input>

                <Button onClick={data}>Converter</Button>

                <DivConvert>
                    <DivContent>
                        <ImageCountry />
                        <Paragraph>Real</Paragraph>
                        <ParagraphValue>
                            {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(inputValue)}
                        </ParagraphValue>
                        <img src={Vector} alt="seta"></img>
                        <ImageCountry contry={selectValue} />
                        <Paragraph>{paragraph}</Paragraph>
                        <ParagraphValue>{paragraphValue}</ParagraphValue>
                    </DivContent>
                </DivConvert>
            </ContainerItens>
        </Container>
    );
}

export default Convert;
