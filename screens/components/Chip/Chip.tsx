import React from 'react'
import { ActiveChip, ActiveChipText, StandardChip, StandardChipText } from '../styled'

interface ChipProps {
  selected: boolean
  label: string
}

export const Chip = ({ selected, label }: ChipProps) => {
  if (selected) {
    return (
      <ActiveChip>
        <ActiveChipText>
          {label}
        </ActiveChipText>
      </ActiveChip>
    )
  } else {
    return (
      <StandardChip>
        <StandardChipText>
          {label}
        </StandardChipText>
      </StandardChip>
    )
  }
}
