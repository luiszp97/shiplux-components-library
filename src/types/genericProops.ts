export interface GenericProps {
    display?: string
    alignItems?: 'stretch' | 'center' | 'start' | 'end'
    backgroundColor?: string
    bottom?: number
    color?: string
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse"
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
    gap?: number
    justifyContent?: "start" | "center" | "space-between" | "space-around" | "space-evenly"
    left?: number
    margin?: number
    marginX?: number
    marginY?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    marginTop?: number
    padding?: number
    paddingX?: number
    paddingY?: number
    paddingBottom?: number
    paddingLeft?: number
    paddingRight?: number
    paddingTop?: number
    position?: 'absolute' | 'relative' | 'static'
    right?: number
    rounded?: number
    top?: number
    border?: string
    borderColor?: string
    borderTop?: number
    borderLeft?: number
    borderBottom?: number
    borderRight?: number
    width?: string | number
    cursor?: 'pointer' | 'help' | 'wait' | 'default' | 'auto' | 'progress' | 'text' | 'not-allowed' | 'gab'
    height?: number | string
    responsiveStyles?: {
        sm?: React.CSSProperties,
        md?: React.CSSProperties,
        lg?: React.CSSProperties,
        xl?: React.CSSProperties,
        xxl?: React.CSSProperties,
    }
    rotate?: number
    minWidth?: number | string
    maxWidth?: number | string
    minHeight?: number | string
    maxHeight?: number | string
    zIndex?: number
    fontSize?: number

}