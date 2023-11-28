import styled from "styled-components"
import { LabelProps } from "./Label"
import { genericStyles } from "../../utils"

export const StyledLabel = styled.label<LabelProps>`
    position:${props => typeof props.absoluteLabel === "undefined" ? "absolute" : "absolute"};
    background-color:${props => typeof props.absoluteLabel === "undefined" ? "white" : props.absoluteLabel ? "white" : "white"};
    ${props => genericStyles(props)}
`