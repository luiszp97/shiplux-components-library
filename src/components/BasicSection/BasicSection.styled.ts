import styled from "styled-components"
import { BasicSectionProps } from "./BasicSection"
import { genericStyles } from "../../utils"

export const StyledBasicSection = styled.section<BasicSectionProps>`
    padding: 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    width:100%;
    height: auto;
    background-color: white;

    background-color: ${props => props.bgColor};
    ${props => genericStyles(props)};

`