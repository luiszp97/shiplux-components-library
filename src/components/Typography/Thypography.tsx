import React, { HTMLProps } from "react"
import { H1, H2, H3, H4, H5 } from "./Typography.styled"

export interface TypographyProps extends HTMLProps<HTMLHeadingElement> {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "body2" | "subtitle" | "subtitle2"
	align?: "left" | "center" | "right" | "justify"
	weight?: number
	// className?: string;
	// label?: string;
	// children?: ReactNode;
}

export default function Typography({
	variant,
	// label,
	align,
	className,
	children,
	weight,
	...props
}: TypographyProps) {
	switch (variant) {
		case "h1":
			return (
				<H1 {...props} weight={weight} align={align} variant="h1">
					{children}
				</H1>
			)
		case "h2":
			return (
				<H2 {...props} weight={weight} align={align} variant="h2">
					{children}
				</H2>
			)
		case "h3":
			return (
				<H3 {...props} weight={weight} align={align} variant="h3">
					{children}
				</H3>
			)
		case "h4":
			return (
				<H4 {...props} weight={weight} align={align} variant="h4">
					{children}
				</H4>
			)
		case "h5":
			return (
				<H5 {...props} weight={weight} align={align} variant="h5">
					{children}
				</H5>
			)
		case "h5":
			return (
				<H5 {...props} weight={weight} align={align} variant="subtitle">
					{children}
				</H5>
			)
		case "h5":
			return (
				<H5 {...props} weight={weight} align={align} variant="subtitle2">
					{children}
				</H5>
			)
		case "body":
			return (
				<H5 {...props} weight={weight} align={align} variant="body">
					{children}
				</H5>
			)
		case "body2":
			return (
				<H5 {...props} weight={weight} align={align} variant="body">
					{children}
				</H5>
			)
		default:
			return <p>{children}</p>
	}
}
