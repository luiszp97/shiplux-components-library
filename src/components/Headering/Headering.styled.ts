import styled from "styled-components"
import { HeaderingProps } from "./Headering"
import { genericStyles } from "../../utils"

export const StyledHeadering = styled.p<HeaderingProps>`
    width: fit-content;
    padding: 10px 24px;
    background-color: #E0E9F2;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    background-color: ${props => props.bgColor};
    ${props => genericStyles(props)};


`