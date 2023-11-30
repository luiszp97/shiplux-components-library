import { css } from "styled-components"
import { GenericProps } from "../types"

export const genericStyles = (props: GenericProps) => {
    return css`
        align-items: ${props.alignItems};
        background-color: ${props.backgroundColor};
        color: ${props.color};
        flex-direction: ${props.flexDirection};
        flex-wrap: ${props.flexWrap};
        gap: ${props.gap && `${props.gap}px`};
        justify-content: ${props.justifyContent};
        margin: ${props.margin && `${props.margin}px`};
        padding: ${props.padding && `${props.padding}px`};
        position: ${props.position};
        border-radius: ${typeof (props.rounded) === 'number' ? `${props.rounded}px` : props.rounded};
        margin-top: ${props.marginTop ? `${props.marginTop}px` : props.marginY && `${props.marginY}px`};
        margin-left: ${props.marginLeft ? `${props.marginLeft}px` : props.marginX && `${props.marginX}px`};
        margin-bottom: ${props.marginBottom ? `${props.marginBottom}px` : props.marginY && `${props.marginY}px`};
        margin-right: ${props.marginRight ? `${props.marginRight}px` : props.marginX && `${props.marginX}px`};
        padding-top: ${props.paddingTop ? `${props.paddingTop}px` : props.paddingY && `${props.paddingY}px`};
        padding-right: ${props.paddingRight ? `${props.paddingRight}px` : props.paddingX && `${props.paddingX}px`};
        padding-bottom: ${props.paddingBottom ? `${props.paddingBottom}px` : props.paddingY && `${props.paddingY}px`};
        padding-left: ${props.paddingLeft ? `${props.paddingLeft}px` : props.paddingX && `${props.paddingX}px`};
        top: ${props.top && `${props.top}px`};
        right: ${props.right && `${props.right}px`};
        bottom: ${props.bottom && `${props.bottom}px`};
        left: ${props.left && `${props.left}px`};
        border: ${props.border};
        border-color: ${props.borderColor};
        border-top: ${props.borderTop && `${props.borderTop}px`};
        border-left: ${props.borderLeft && `${props.borderLeft}px`};
        border-right: ${props.borderRight && `${props.borderRight}px`};
        border-bottom: ${props.borderBottom && `${props.borderBottom}px`};
        width: ${typeof (props.width) === 'number' ? `${props.width}px` : props.width};
        height: ${typeof (props.height) === 'number' ? `${props.height}px` : props.height};
        cursor: ${props.cursor};
        display: ${props.display};
        rotate: ${props.rotate && `${props.rotate}deg`};
        z-index: ${props.zIndex};
        min-width: ${typeof (props.minWidth) === 'number' ? `${props.minWidth}px` : props.minWidth};
        max-width: ${typeof (props.maxWidth) === 'number' ? `${props.maxWidth}px` : props.maxWidth};
        min-height: ${typeof (props.minHeight) === 'number' ? `${props.minHeight}px` : props.minHeight};
        max-height: ${typeof (props.maxHeight) === 'number' ? `${props.maxHeight}px` : props.maxHeight};
        font-size: ${props.fontSize && `${props.fontSize}px`};
        transform: ${props.translateX && `translateX(${props.translateX})`};
        transform:  ${props.translateY && `translateX(${props.translateY})`};
        opacity: ${props.opacity};
        // responsive de
        ${() => {
            let mediaQuery

            const mediaPixeles = {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                xxl: 1536,
            }
            for (const key in props.responsiveStyles) {
                const qlq = props.responsiveStyles[key]
                mediaQuery = css`
                 @media (min-width: ${Number(mediaPixeles[key])}px) {
                    ${qlq}
                }
                `
            }

            return mediaQuery
        }}
       
    `
}
