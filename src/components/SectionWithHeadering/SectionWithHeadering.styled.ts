import styled from "styled-components"
import { SectionWithHeaderingProps } from "./SectionWithHeadering"
import { genericStyles } from "../../utils"

export const StyledSection = styled.section<SectionWithHeaderingProps>`
    padding:40px;
    border-radius: 28px;
    width: 100%;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items:center;

    background-color: ${props => props.bgColor};
    ${props => genericStyles(props)};

`