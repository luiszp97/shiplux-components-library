import React, { FC } from "react"
import { Flex, Icon, Typography } from ".."

interface ReviewCardProps {
	name: string
	rating: number
	ratingIcon: string
	description: string
	date: string
	className?: string
	reviewLogo?: string
	reviewLogoWidth?: number
	reviewLogoHeight?: number
}
export default function ReviewCard({
	name,
	rating,
	description,
	date,
	ratingIcon,
	className,
	reviewLogo,
	reviewLogoWidth,
	reviewLogoHeight
}: ReviewCardProps) {
	const parseDescription = (description: string) => {
		return description.length > 150 ? description.slice(0, 150).concat("...") : description
	}
	return (
		<Flex
			border="1px solid #E0E9F2"
			flexDirection="column"
			padding={16}
			gap={16}
			rounded={8}
			width={265}
			className={className && className}
		>
			<Typography variant="subtitle2" weight={500}>
				{name}
			</Typography>
			<Flex flexDirection="row" gap={4}>
				{Array.from({ length: rating }).map((item, index) => (
					<Icon key={index} src={ratingIcon} alt="review icon" width={24} height={24} />
				))}
			</Flex>
			<Typography variant="body2">{parseDescription(description)}</Typography>
			<Typography variant="body2" color="#565656">
				{date}
			</Typography>
			{reviewLogo && (
				<Icon
					src={reviewLogo}
					alt="review logo"
					width={reviewLogoWidth ? reviewLogoWidth : 130}
					height={reviewLogoHeight ? reviewLogoHeight : 32}
				/>
			)}
		</Flex>
	)
}
