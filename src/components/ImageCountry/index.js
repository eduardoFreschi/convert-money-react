import React, { useEffect, useState } from "react";
import { ImageCountry as Image } from "./styles";
import Brasil from "../../assets/brasil.png";
import Usd from "../../assets/united-states.png";
import Eur from "../../assets/euro.png";
import Btc from "../../assets/bitcoin.png";

function ImageCountry({ contry }) {
    const [image, setImage] = useState(Brasil);

    useEffect(() => {
        async function trocar() {
            if (contry === "USD") {
                await setImage(Usd);
            }
            if (contry === "EUR") {
                await setImage(Eur);
            }
            if (contry === "BTC") {
                await setImage(Btc);
            }
        }
        trocar();
    }, [contry]);

    return <Image src={image} />;
}

export default ImageCountry;
