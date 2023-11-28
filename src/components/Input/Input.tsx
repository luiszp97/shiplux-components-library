import React, { HTMLProps, useRef, useState } from "react"
import { GenericProps } from "../../types"
import { InputStyled } from "./input.styled"
import { Label, Box } from "../"

export interface InputProps extends GenericProps, HTMLProps<HTMLInputElement> {
	label?: string
	containerStyles?: string
	rightIcon?: boolean
	leftIcon?: boolean
	icon?: string
	type: "text" | "password" | "number" | "email" | "checkbox" | "radio" | "file"
	absoluteLabel?: boolean
	placeholder?: string
}

export default function Input({
	type = "text",
	label,
	containerStyles,
	rightIcon,
	leftIcon,
	icon,
	absoluteLabel,
	placeholder,
	...props
}: InputProps) {
	const [value, setValue] = useState("")
	const inputRef = useRef<HTMLInputElement | null>(null)

	console.log(absoluteLabel, "d")
	return (
		<Box
			display="flex"
			flexDirection="column"
			position="relative"
			gap={16}
			className={containerStyles && containerStyles}
		>
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
				>
					{label}
				</Label>
			)}
			<InputStyled
				maxHeight={55}
				display="flex"
				flexDirection="column"
				rounded={4}
				padding={12}
				border="1px solid #001D32"
				position={rightIcon || leftIcon ? "relative" : "static"}
				paddingLeft={leftIcon ? 40 : 0}
				paddingRight={rightIcon ? 40 : 0}
				value={value}
				placeholder={placeholder}
				onChange={(e) => {
					setValue(e.currentTarget.value)
				}}
				type={type === "number" ? "text" : type}
				{...props}
			/>
		</Box>
	)
}
