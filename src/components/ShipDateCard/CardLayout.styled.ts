import { HTMLProps } from "react"
import styled, { css } from "styled-components"
import { GenericProps } from "../../types"
import { genericStyles } from "../../utils"

interface Porps extends GenericProps, HTMLProps<HTMLDivElement> {
    isSelected?: boolean
}
export const CardLayout = styled.div<Porps>`
    border: 1px solid #DDE3EF;
    border-radius: 16px;
    padding: 12px;
    cursor: pointer;
    position: relative;
    ${props => genericStyles(props)};
    ${props => {
        if (props.isSelected) {
            return css`
                border: 2px solid #6750A4;
                background-color: #E8DEF8;
            `
        }
    }}
`

