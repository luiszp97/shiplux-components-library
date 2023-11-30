import React, { HTMLProps } from "react"
import { StyledHeadering } from "./Headering.styled"
import { GenericProps } from "../../types"

export interface HeaderingProps extends GenericProps, HTMLProps<HTMLParagraphElement> {
	title?: string
	className?: string
	bgColor?: string
}
export default function Headering({ title, className, bgColor, ...props }: HeaderingProps) {
	return (
		<StyledHeadering bgColor={bgColor} className={className && className} {...props}>
			{title}
		</StyledHeadering>
	)
}
