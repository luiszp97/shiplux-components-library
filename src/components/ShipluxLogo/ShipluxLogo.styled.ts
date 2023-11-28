import styled from "styled-components"
import { genericStyles } from "../../utils"
import { GenericProps } from "../../types"

export const StyledSvg = styled.svg<GenericProps>`
    ${props => genericStyles(props)}
`