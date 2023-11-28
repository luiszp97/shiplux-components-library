import React, { HTMLProps, ReactNode } from "react"
import { ButtonStyled } from "./Button.styled"
import { Icon } from "../"
import { GenericProps } from "../../types"

export interface ButtonProps extends GenericProps, HTMLProps<HTMLButtonElement> {
	type: "button" | "submit" | "reset"
	sizes?: "small" | "medium" | "large"
	variant?: "contained" | "outline" | "text"
	children?: ReactNode
	lable?: string
	icon?: string
	rightIcon?: boolean
	leftIcon?: boolean
	widthIcon?: number
	heightIcon?: number
	className?: string
}

export default function Button({
	sizes = "medium",
	type = "button",
	children,
	lable,
	variant,
	rightIcon,
	leftIcon,
	icon,
	widthIcon = 18,
	heightIcon = 18,
	className,
	rounded,
	...props
}: ButtonProps) {
	return (
		<ButtonStyled
			className={className && className}
			variant={variant}
			type={type}
			sizes={sizes}
			rounded={rounded || 100}
			icon={icon}
			{...props}
		>
			{icon && leftIcon && <Icon src={icon} width={widthIcon} height={heightIcon} />}
			{children || lable}
			{icon && rightIcon && <Icon src={icon} width={widthIcon} height={heightIcon} />}
		</ButtonStyled>
	)
}
