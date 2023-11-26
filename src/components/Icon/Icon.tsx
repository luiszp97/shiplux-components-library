import React, { HTMLProps } from "react"

interface IconProps extends HTMLProps<HTMLImageElement> {
	alt?: string
	width?: number
	height?: number
	src: string
}

export default function Icon({ alt = "icon", width = 16, height = 16, src, ...props }: IconProps) {
	return <img src={src} width={width} height={height} {...props} />
}
