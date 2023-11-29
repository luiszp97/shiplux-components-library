import React, { useState } from "react"
import Icon from "../Icon"
import Box from "../Box"
import Flex from "../Flex"

interface ChangeThemeButtonProps {
	containerClassName?: string
	lightIcon?: string
	darkIcon?: string
	className?: string
}
export default function ChangeThemeButton({
	className,
	lightIcon,
	darkIcon,
	containerClassName
}: ChangeThemeButtonProps) {
	const [isDarkMode, setIsDarkMode] = useState(false)
	return (
		<Flex
			className={containerClassName && containerClassName}
			width={72}
			height={32}
			rounded={100}
			border="2px solid #EEF0F4"
			gap={8}
		>
			<Box
				translateX={isDarkMode ? "38px" : "0px"}
				rounded={"100%"}
				padding={2}
				backgroundColor="#DDE3EF"
				width={30}
				height={28}
				position="absolute"
				className={className && className}
			></Box>
			<Flex
				width={"50%"}
				justifyContent="center"
				alignItems="center"
				cursor="pointer"
				onClick={() => {
					setIsDarkMode(!isDarkMode)
				}}
			>
				<Icon src={lightIcon} alt="sun icon" width={15} height={15} zIndex={40} />
			</Flex>
			<Flex
				width={"50%"}
				justifyContent="center"
				alignItems="center"
				cursor="pointer"
				onClick={() => {
					setIsDarkMode(!isDarkMode)
				}}
			>
				<Icon
					zIndex={40}
					backgroundColor="transparent"
					src={darkIcon}
					alt="sun icon"
					width={15}
					height={15}
				/>
			</Flex>
		</Flex>
	)
}
