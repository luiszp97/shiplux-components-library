import React, { HTMLProps } from "react"
import Icon from "../Icon"
import Typography from "../Typography"
import Flex from "../Flex/Flex"
import { CardLayout } from "./CardLayout.styled"
import { GenericProps } from "../../types"

export interface ShipDateCardProps extends GenericProps, HTMLProps<HTMLDivElement> {
	originDates: string
	price: number
	deliveryDates: string
	isSelected?: boolean
}

export default function ShipDateCard({
	originDates,
	price,
	deliveryDates,
	isSelected
}: ShipDateCardProps) {
	return (
		<CardLayout
			responsiveStyles={{
				md: {
					width: "252px",
					height: "72px"
				}
			}}
			width={172}
			height={75}
			isSelected={isSelected}
		>
			<Flex height={"100%"} justifyContent="center" flexDirection="column" gap={4}>
				<Flex alignItems="center" justifyContent="space-between" gap={4}>
					<Typography margin={0} variant="body2" weight={500} color="#001D32">
						{originDates}
					</Typography>
					<Typography
						display="none"
						variant="body2"
						weight={500}
						backgroundColor="#5BCA74"
						paddingX={12}
						paddingY={4}
						rounded={100}
						margin={0}
						className="hidden md:block"
						responsiveStyles={{
							md: {
								display: "block"
							}
						}}
					>
						$ {price}
					</Typography>
				</Flex>
				<Typography margin={0} variant="caption" color="#49454F">
					Delivery: {deliveryDates}
				</Typography>
				<Typography
					margin={0}
					variant="body2"
					backgroundColor="#5BCA74"
					paddingX={12}
					rounded={100}
					weight={500}
					width="max-content"
					responsiveStyles={{
						md: { display: "none" }
					}}
				>
					$ {price}
				</Typography>
				{isSelected && (
					<Icon
						position="absolute"
						bottom={8}
						right={16}
						src="https://www.shiplux.com/_next/static/media/keyboard_arrow_right.99c4df12.svg"
						width={18}
						height={18}
						alt="check icon"
					/>
				)}
			</Flex>
		</CardLayout>
	)
}
