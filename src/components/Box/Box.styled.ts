import styled from "styled-components"
import { genericStyles } from "../../utils"
import { BoxProps } from "./Box"

export const BoxStyled = styled.div<BoxProps>`
    ${props => genericStyles(props)}
`