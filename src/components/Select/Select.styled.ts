import styled from "styled-components"
import { SelectProps } from "./Select"
import { genericStyles } from "../../utils"

export const StyledSelect = styled.select<SelectProps>`
    border-radius: 4px;
    max-height: 55px;
    width: 100%;
    min-width: 100px;
    border: 1px solid #001D32;
    padding: 12px;
     &:focus-visible{
        outline: 2px solid transparent;
        outline-offset: 2px;
     }
    ${props => genericStyles(props)}
`