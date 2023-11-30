import styled from "styled-components"
import { PopuProps } from "./Popup"
import { genericStyles } from "../../utils"

export const StyledPopup = styled.div<PopuProps>`
    background-color: white;
    border-radius: 16px;
    padding: 24px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    padding: ${props => props.padding};
    background-color: ${props => props.bgColor};   
    ${props => genericStyles(props)};
`