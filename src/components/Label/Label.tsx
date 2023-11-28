import React, { HTMLProps } from "react"
import { StyledLabel } from "./Label.styled"
import { GenericProps } from "../../types"

export interface LabelProps extends GenericProps, HTMLProps<HTMLLabelElement> {
	absoluteLabel?: boolean
}

export default function Label({ children, absoluteLabel, ...props }: LabelProps) {
	return (
		<StyledLabel absoluteLabel={absoluteLabel} {...props}>
			{children}
		</StyledLabel>
	)
}
