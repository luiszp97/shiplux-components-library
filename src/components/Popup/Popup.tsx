import React, { HTMLProps, ReactNode } from "react"
import { StyledPopup } from "./Popup.styled"
import { GenericProps } from "../../types"
import Flex from "../Flex"

export interface PopuProps extends GenericProps, HTMLProps<HTMLDivElement> {
	bgColor?: string
	children?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
	containerStyles?: string
	popupStyles?: string
	isOpen?: boolean
	opacityColor?: string
	opacity?: number
}

export default function Popup({
	width,
	height,
	bgColor,
	opacityColor,
	opacity,
	children,
	containerStyles,
	popupStyles,
	isOpen = false,
	...props
}: PopuProps) {
	return (
		<>
			{isOpen && (
				<Flex
					width={"100vw"}
					height={"100vh"}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					backgroundColor={opacityColor ? opacityColor : "#000"}
					opacity={opacity ? opacity : 0.5}
					className={containerStyles && containerStyles}
				>
					<StyledPopup
						width={width}
						height={height}
						className={popupStyles && popupStyles}
						bgColor={bgColor}
						{...props}
					>
						{children}
					</StyledPopup>
				</Flex>
			)}
		</>
	)
}
