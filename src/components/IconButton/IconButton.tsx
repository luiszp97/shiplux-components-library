import React, { HTMLProps } from "react"
import Icon from "../Icon/Icon"
import { IconButtonStyled } from "./IconButton.styled"
import { GenericProps } from "../../types"

export interface IconButtonProps extends GenericProps, HTMLProps<HTMLButtonElement> {
	variant?: "contained" | "outline" | "text"
	icon: string
	widthIcon?: number
	heightIcon?: number
	className?: string
	href?: string
}

export default function IconButton({
	icon,
	widthIcon,
	heightIcon,
	className,
	rounded,
	variant,
	...props
}: IconButtonProps) {
	return (
		<IconButtonStyled
			{...props}
			rounded={rounded || 4}
			className={className && className}
			icon={icon}
			variant={variant}
		>
			<Icon src={icon} width={widthIcon} height={heightIcon} />
		</IconButtonStyled>
	)
}
