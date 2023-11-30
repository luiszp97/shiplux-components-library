import React, { HTMLProps, ReactNode } from "react"
import { StyledBasicSection } from "./BasicSection.styled"
import { GenericProps } from "../../types"
import Typography from "../Typography"

export interface BasicSectionProps extends GenericProps, HTMLProps<HTMLDivElement> {
	bgColor?: string
	containerStyles?: string
	children?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
	title?: string
	titleStyles?: string
	titleVariant?:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "body"
		| "body2"
		| "subtitle"
		| "subtitle2"
		| "caption"
		| "caption2"
}
export default function BasicSection({
	bgColor,
	containerStyles,
	children,
	title,
	titleStyles,
	titleVariant = "h5",
	...props
}: BasicSectionProps) {
	return (
		<StyledBasicSection
			className={containerStyles && containerStyles}
			bgColor={bgColor && bgColor}
			{...props}
		>
			<Typography marginBottom={16} className={titleStyles && titleStyles} variant={titleVariant}>
				{title}
			</Typography>
			{children}
		</StyledBasicSection>
	)
}
