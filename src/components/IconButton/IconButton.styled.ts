import styled, { css } from "styled-components"
import { IconButtonProps } from "./IconButton"
import { genericStyles } from "../../utils"

export const IconButtonStyled = styled.button<IconButtonProps>`
    width: fit-content;
    padding: 8px;
    cursor: pointer;
    border: 1px solid transparent;
    ${props => {
        return genericStyles(props)
    }};
    ${props => {
        switch (props.variant) {
            case 'contained':
                return css`
                    background-color: ${props.color};
                `
            case 'outline':
                return css`
                    background-color: transparent;
                    border: 1px solid ${props.color};
                `
            case 'text':
                return css`
                    background-color: transparent;
                    border: none;
                `
        }
    }}

`