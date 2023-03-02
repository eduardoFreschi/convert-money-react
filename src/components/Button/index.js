import React from "react";
import { Button as Btn } from "./styles";

function Button({ children, ...rest }) {
    return <Btn {...rest}>{children}</Btn>;
}

export default Button;
