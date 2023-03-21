import React from "react";
import { FormInputLabel, Input, Group } from "./form-input.styles";

const InputComponent = ({label, ...otherProps}) => {
    return(
        <Group>
            <Input{...otherProps}/>
            { label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel> }
        </Group>
    )
}

export default InputComponent;