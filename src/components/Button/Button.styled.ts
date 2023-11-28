import styled, { css } from "styled-components"
import { ButtonProps } from "./Button"
import { genericStyles } from "../../utils"

export const ButtonStyled = styled.button<ButtonProps>`
   background-color: ${props => props.backgroundColor};
   color: ${props => props.color || '#000'};
   font-size: 14px;
   font-weight: 500;
   cursor: pointer;
   border: none;
   ${props => {
      return genericStyles(props)
   }};
   ${props => {
      return css`
         display: ${props.icon ? 'flex' : 'block'};
         justify-content: ${props.icon && 'space-between'};
         align-items: ${props.icon && 'center'};
         gap: ${props.icon && '8px'};     
      `
   }};
   ${props => {
      switch (props.sizes) {
         case 'small':
            return css`
            padding: 10px 24px;
         `
         case 'medium':
            return css`
            padding: 10px 60px;
         `
         case 'large':
            return css`
            padding: 10px 120px;
         `
      }
   }};
   ${props => {
      switch (props.variant) {
         case 'contained':
            return css`
               background-color: ${props.backgroundColor};
               color: ${props.color};
               border: 1px solid transparent;
            `
         case 'outline':
            return css`
               background-color: transparent;
               color: ${props.color};
               border: 1px solid ${props.backgroundColor};
            `
         case 'text':
            return css`
               background-color: transparent;
               border: 1px solid transparent;
               color: ${props.backgroundColor}
            `
      }
   }};
   
`