import styled, { css } from "styled-components"
import { TypographyProps } from "./Thypography"
import { genericStyles } from "../../utils"


export const H1 = styled.h1<TypographyProps>`
    font-weight: ${props => props.weight || 500};
    text-align: ${props => props.align || 'left'};
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -1.12px;
    margin: 0px;
    ${props => {
        return genericStyles(props)
    }};
`
export const H2 = styled.h2<TypographyProps>`
    font-weight: ${props => props.weight || 500};
    text-align: ${props => props.align || 'left'};
    font-size: 48px;
    line-height: 57.6px;
    letter-spacing: -0.48px;
    margin: 0px;
    ${props => {
        return genericStyles(props)
    }};
`
export const H3 = styled.h3<TypographyProps>`
    font-weight: ${props => props.weight || 500};
    text-align: ${props => props.align || 'left'};
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.48px;
    margin: 0px;
    ${props => {
        return genericStyles(props)
    }};
`
export const H4 = styled.h4<TypographyProps>`
    font-weight: ${props => props.weight || 500};
    text-align: ${props => props.align || 'left'};
    font-size: 32px;
    line-height: 38.4px;
    letter-spacing: -0.32px;
    margin: 0px;
    ${props => {
        return genericStyles(props)
    }};
`
export const H5 = styled.p<TypographyProps>`
    font-weight: ${props => props.weight || 400};
    text-align: ${props => props.align || 'left'}; 
    margin: 0px;
    ${props => {
        return genericStyles(props)
    }};
    ${props => {
        switch (props.variant) {
            case 'h5':
                return css` 
                    font-size: 24px;
                    line-height: 28px;
                    margin: 0px;
                `
            case 'subtitle':
                return css`
                    font-size: 22px;
                    line-height: 33px;  
                    margin: 0px;
                `
            case 'subtitle2':
                return css`
                    font-size: 20px;
                    line-height: 33px;  
                    margin: 0px;
                `
            case 'body':
                return css`
                    font-size: 18px;
                    line-height: 32.4px;
                    margin: 0px; 
                `
            case 'body2':
                return css`
                    font-size: 16px;
                    line-height: 19.2px;
                    letter-spacing: 0.1px ;
                    margin: 0px;
                `
            case 'caption':
                return css`
                    font-size: 14px;
                    line-height: 19.2px;
                    letter-spacing: 0.1px ;
                    margin: 0px;
                `
            case 'caption2':
                return css`
                    font-size: 12px;
                    line-height: 19.2px;
                    letter-spacing: 0.1px ;
                    margin: 0px;
                `
        }
    }


    }


`