import React from "react"
import { useState } from "react"
import { Typography, Flex, Icon } from ".."
import { GenericProps } from "../../types"

interface DropdownProps extends GenericProps {
	question: string
	answare: string
	className?: string
	icon?: string
}
export default function Dropdown({ question, answare, className, icon }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Flex
			width={"100%"}
			flexDirection="column"
			padding={12}
			rounded={8}
			backgroundColor="#B9C7D2"
			className={className && className}
		>
			<Flex flexDirection="row" alignItems="center" justifyContent="space-between">
				<Typography variant="body2" weight={500}>
					{question || "question"}
				</Typography>
				{icon ? (
					<Icon
						rotate={isOpen ? 90 : 0}
						onClick={() => setIsOpen(!isOpen)}
						src={icon}
						alt="icon"
						width={20}
						height={20}
					/>
				) : (
					<></>
				)}
			</Flex>
			{isOpen && (
				<Typography width={"100%"} marginTop={16} variant="body2">
					{answare || "esta es la respuesta"}
				</Typography>
			)}
		</Flex>
	)
}
