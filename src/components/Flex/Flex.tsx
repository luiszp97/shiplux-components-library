import React, { HTMLProps, ReactNode } from "react"
import { FlexStyled } from "./Flex.styled"
import { GenericProps } from "../../types/genericProops"

export interface FlexProps extends GenericProps, HTMLProps<HTMLDivElement> {
	children: JSX.Element[] | JSX.Element | ReactNode | ReactNode[]
	className?: string
}

export default function Flex({ children, className, ...props }: FlexProps) {
	return (
		<FlexStyled className={className && className} {...props}>
			{children}
		</FlexStyled>
	)
}
