//React
import React, { HTMLProps } from "react"

//Components
import { Icon, Typography } from "../"
import { GenericProps } from "../../types"
import { Box } from "../"

//Typescript

interface CheckInputProps extends GenericProps, HTMLProps<HTMLDivElement> {
	icon?: string
	iconWidth?: number
	iconHeight?: number
	label: string
	price?: string
	isSelected?: boolean
	sizes?: "xs" | "sm" | "md" | "lg" | "xl"
	primary?: boolean
	direction?: "row" | "row-reverse" | "column" | "column-reverse"
	selectedPrice?: boolean
	priceClassName?: string
	labelClassName?: string
	className?: string
}

export default function CheckInput({
	icon,
	iconHeight,
	iconWidth,
	label,
	price,
	className,
	isSelected,
	primary,
	sizes = "sm",
	direction,
	selectedPrice,
	priceClassName,
	labelClassName,
	...props
}: CheckInputProps) {
	const sizeProps: Record<string, any> = {
		xs: {
			width: 80,
			height: 70
		},
		sm: {
			width: 90,
			height: 75
		},
		md: {
			width: 100,
			height: 75
		},
		lg: {
			width: 115,
			height: 75
		},
		xl: {
			width: 125,
			height: 75
		}
	}

	const styleProps = {
		primaryLight: {
			backgroundColor: "#EEF0F4",
			border: "none"
		},

		selectedPrimary: {
			backgroundColor: "#E8DEF8",
			border: "2px solid #6750A4"
		}
	}
	const defaultProps = isSelected ? styleProps.selectedPrimary : styleProps.primaryLight

	return (
		<Box
			display="flex"
			flexDirection={direction || "row"}
			justifyContent="center"
			alignItems="center"
			rounded={8}
			position="relative"
			padding={12}
			gap={4}
			cursor="pointer"
			{...defaultProps}
			width={sizeProps && sizeProps[sizes].width}
			height={sizeProps && sizeProps[sizes].height}
			{...props}
			className={className && className}
		>
			{icon && (
				<Box
					minWidth={32}
					zIndex={999}
					backgroundColor="#00000000"
					position="relative"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Box
						minWidth={16.7}
						minHeight={4.5}
						display="flex"
						justifyContent="center"
						position="relative"
					>
						<Icon src={icon} width={iconWidth || 20} height={iconHeight || 20} />
					</Box>
				</Box>
			)}

			<Typography
				variant="caption"
				color={isSelected ? "#001F2A" : "black"}
				align="left"
				position="relative"
				className={labelClassName && labelClassName}
			>
				{label}
			</Typography>
			{price && (
				<Typography
					variant="caption"
					className={`${priceClassName && priceClassName} ${
						selectedPrice && "bg-light-gray-secondary"
					} ${primary && "text-black"} ${
						isSelected && "text-typography-purple bg-light-purple-bg "
					} px-2 rounded-[100px] whitespace-nowrap inherit relative font-medium tracking-[0.25px] leading-[157.14285278320312%] `}
				>
					{price}
				</Typography>
			)}
		</Box>
	)
}
