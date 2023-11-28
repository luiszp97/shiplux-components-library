import React, { HTMLProps } from "react"
import { GenericProps } from "../../types"
import { IconStyled } from "./IconStyled.styled"

interface IconProps extends GenericProps, HTMLProps<HTMLImageElement> {
	alt?: string
	width?: number
	height?: number
	src: string
}

export default function Icon({ alt = "icon", width = 16, height = 16, src, ...props }: IconProps) {
	return <IconStyled src={src} width={width} height={height} {...props} />
}
