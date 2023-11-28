import React, { HTMLProps, ReactNode } from "react"
import { GenericProps } from "../../types"
import { StyledSelect } from "./Select.styled"
import { Box, Label } from "../"

export interface SelectProps extends GenericProps, HTMLProps<HTMLSelectElement> {
	className?: string
	labelProps?: string
	label?: string
	absoluteLabel?: boolean
	children: string[] | ReactNode[] | JSX.Element[]
	defaultOption?: string
	containerStyles?: string
}

export default function Select({
	className,
	labelProps,
	label,
	absoluteLabel,
	containerStyles,
	defaultOption = "This is a example",
	children,
	...props
}: SelectProps) {
	return (
		<Box className={containerStyles && containerStyles}>
			{label && (
				<Label
					absoluteLabel={absoluteLabel}
					zIndex={99}
					top={-7}
					left={8}
					color="#49454F"
					fontSize={12}
					paddingX={4}
					responsiveStyles={{
						md: {
							position: `${
								typeof absoluteLabel === "undefined"
									? "static"
									: absoluteLabel
									? "absolute"
									: "static"
							}`,
							backgroundColor: `${
								typeof absoluteLabel === "undefined" ? "transparent" : absoluteLabel && "white"
							}`,
							fontSize: "14px",
							top: "-8px",
							left: "8px"
						}
					}}
					className={labelProps && labelProps}
				>
					{label}
				</Label>
			)}
			<StyledSelect className={className && className} {...props}>
				<option defaultChecked hidden>
					{defaultOption}
				</option>
				{children.map((item, index) => (
					<option value={item} key={index} className="p-3">
						{item}
					</option>
				))}
			</StyledSelect>
		</Box>
	)
}
