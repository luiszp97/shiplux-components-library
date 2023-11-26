import styled, { css } from "styled-components"
import { IconButtonProps } from "./IconButton"

export const IconButtonStyled = styled.button<IconButtonProps>`
    width: fit-content;
    padding: 8px;
    border-radius: ${props => props.rounded ? props.rounded : "4px"};
    cursor: pointer;
    background-color: ${props => props.color};
    border: 1px solid transparent;
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