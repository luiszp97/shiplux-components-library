import React, { HTMLProps, ReactNode } from "react"
import { StyledSection } from "./SectionWithHeadering.styled"
import { GenericProps } from "../../types"
import Headering from "../Headering"
import Typography from "../Typography"
import Box from "../Box"

export interface SectionWithHeaderingProps extends GenericProps, HTMLProps<HTMLDivElement> {
	bgColor?: string
	containerStyles?: string
	headering?: string
	headeringStyles?: string
	title?: string
	titleStyles?: string
	children?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
}

export default function SectionWithHeadering({
	bgColor,
	containerStyles,
	title,
	headering,
	headeringStyles,
	titleStyles,
	children,
	...props
}: SectionWithHeaderingProps) {
	return (
		<StyledSection bgColor={bgColor} className={containerStyles && containerStyles} {...props}>
			<Headering
				className={headeringStyles && headeringStyles}
				marginBottom={16}
				title={headering}
			/>
			<Typography className={titleStyles && titleStyles} marginBottom={40} variant="h3">
				{title}
			</Typography>
			<Box>{children}</Box>
		</StyledSection>
	)
}
