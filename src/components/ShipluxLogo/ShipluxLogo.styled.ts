import styled, { css } from "styled-components"
import { genericStyles } from "../../utils"
import { GenericProps } from "../../types"
import { LoaderSpinnerProps } from "../LoaderSpinner/LoaderSpinner"

export const StyledSvg = styled.svg<LoaderSpinnerProps, GenericProps>`
    ${props => {
        if (props.isSpinner) {
            return css`
                animation: spin 1s linear infinite;
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                        }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `
        }
    }}
    ${props => genericStyles(props as GenericProps)};
`