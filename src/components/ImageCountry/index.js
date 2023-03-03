import React, { useEffect, useState } from "react";
import { ImageCountry as Image } from "./styles";
import Brasil from "../../assets/brasil.png";
import Usd from "../../assets/united-states.png";
import Eur from "../../assets/euro.png";
import Btc from "../../assets/bitcoin.png";

function ImageCountry({ country }) {
    const [image, setImage] = useState(Brasil);

    useEffect(() => {
        try {
            if (!country) throw new Error("imagem não pode ser trocada");
            async function trocar() {
                if (country === "USD") {
                    await setImage(Usd);
                }
                if (country === "EUR") {
                    await setImage(Eur);
                }
                if (country === "BTC") {
                    await setImage(Btc);
                }
            }

            trocar();
        } catch (err) {
            console.log(err.message);
        }
    }, [country]);

    return <Image src={image} />;
}

export default ImageCountry;
