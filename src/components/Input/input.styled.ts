import styled from "styled-components"
import { InputProps } from "./Input"
import { genericStyles } from "../../utils"

export const InputStyled = styled.input<InputProps>`
    ${props => genericStyles(props)};
    &:focus-visible {
        outline: 2px solid transparent;
        outline-offset: 2px;
    };
`