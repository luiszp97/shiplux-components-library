import React, { HTMLProps } from "react"
import Icon from "../Icon/Icon"
import { IconButtonStyled } from "./IconButton.styled"

export interface IconButtonProps extends HTMLProps<HTMLButtonElement> {
	variant?: "contained" | "outline" | "text"
	icon: string
	widthIcon?: number
	heightIcon?: number
	rounded?: string
	className?: string
	color?: string
	href?: string
}

export default function IconButton({
	icon,
	widthIcon,
	heightIcon,
	className,
	color,
	rounded,
	variant,
	...props
}: IconButtonProps) {
	return (
		<IconButtonStyled {...props} icon={icon} variant={variant}>
			<Icon src={icon} width={widthIcon} height={heightIcon} />
		</IconButtonStyled>
	)
}
