import styled from "styled-components"
import { GenericProps } from "../../types"
import { genericStyles } from "../../utils"

export const IconStyled = styled.img<GenericProps>`
    ${props => {
        return genericStyles(props)
    }}
    
`
