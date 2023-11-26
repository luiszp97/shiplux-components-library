import React, { HTMLProps, ReactNode } from "react"
import { ButtonStyled } from "./Button.styled"
import { Icon } from "../"

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
	type: "button" | "submit" | "reset"
	sizes?: "small" | "medium" | "large"
	variant?: "contained" | "outline" | "text"
	backgroundColor?: string
	children?: ReactNode
	lable?: string
	color?: string
	icon?: string
	rightIcon?: boolean
	leftIcon?: boolean
	widthIcon?: number
	heightIcon?: number
}

export default function Button({
	sizes = "medium",
	type = "button",
	backgroundColor = "#6750A4",
	children,
	lable,
	variant,
	rightIcon,
	leftIcon,
	icon,
	widthIcon = 18,
	heightIcon = 18,
	color = "#000",
	...props
}: ButtonProps) {
	return (
		<ButtonStyled
			variant={variant}
			backgroundColor={backgroundColor}
			color={color}
			type={type}
			sizes={sizes}
			icon={icon}
			{...props}
		>
			{icon && leftIcon && <Icon src={icon} width={widthIcon} height={heightIcon} />}
			{children || lable}
			{icon && rightIcon && <Icon src={icon} width={widthIcon} height={heightIcon} />}
		</ButtonStyled>
	)
}
