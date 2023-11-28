import styled from "styled-components"
import { FlexProps } from "./Flex"
import { genericStyles } from "../../utils"


export const FlexStyled = styled.div<FlexProps>`
    display: flex;
    ${props => {
        return genericStyles(props)
    }}
`