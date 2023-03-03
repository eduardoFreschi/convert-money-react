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
    const [paragraphV, setParagraphValue] = useState(2000);

    async function fetchV() {
        try {
            // const data = await axios({
            //     method: "get",
            //     url: `https://api.api-ninjas.com/v1/convertcurrency?want=${selectValue}&have=BRL&amount=${inputRef.current.value}`,
            //     responseType: "stream",
            // })
            //     .then((response) => console.log(response))
            //     .catch((err) => console.log(err));
            if (!inputValue || !selectValue) {
                throw new Error("sem conteudo");
            }
            await axios({
                method: "get",
                url: `https://economia.awesomeapi.com.br/last/${selectValue}-BRL`,
            })
                .then((response) => response.data)
                .then((data) => data[`${selectValue}BRL`]["bid"])
                .then((bid) => bid * inputValue)
                .then((value) => setParagraphValue(value));
        } catch (err) {
            console.log(err.message);
        }
    }
    function data() {
        fetchV();
    }

    async function verifySelect(e) {
        setSelectValue(e.target.value);
        fetchV();
    }

    function verifyInput(e) {
        setInputValue(e.target.value);
    }

    const inputRef = useRef();

    useEffect(() => {
        async function text() {
            try {
                if (!inputValue) throw new Error("paragráfo inexistente");
                let option = options.find(
                    (option) => option.value === selectValue
                );
                await setParagraph(option.name);
            } catch (err) {
                console.log(err.message);
            }
        }
        if (!selectValue) {
            return;
        }
        text();
    }, [inputValue, selectValue]);
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
                        <ImageCountry country={selectValue} />
                        <Paragraph>{paragraph}</Paragraph>
                        <ParagraphValue>
                            {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: `${selectValue}`,
                            }).format(paragraphV)}
                        </ParagraphValue>
                    </DivContent>
                </DivConvert>
            </ContainerItens>
        </Container>
    );
}

export default Convert;
