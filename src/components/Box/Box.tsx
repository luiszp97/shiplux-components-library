import React, { HTMLProps, ReactNode } from "react"
import { GenericProps } from "../../types"
import { BoxStyled } from "./Box.styled"

export interface BoxProps extends GenericProps, HTMLProps<HTMLDivElement> {
	children?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
	className?: string
}

export default function Box({ children, className, ...props }: BoxProps) {
	return (
		<BoxStyled className={className && className} {...props}>
			{children}
		</BoxStyled>
	)
}
