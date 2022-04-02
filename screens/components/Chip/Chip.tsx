import React from 'react'
import { ActiveChip, ActiveChipText, StandardChip, StandardChipText } from './styled'

interface ChipProps {
  selected: boolean
  label: string
  onPressFn: () => void
}

export const Chip = ({ selected, label, onPressFn }: ChipProps) => {
  if (selected) {
    return (
      <ActiveChip onPress={onPressFn}>
        <ActiveChipText>
          {label}
        </ActiveChipText>
      </ActiveChip>
    )
  } else {
    return (
      <StandardChip onPress={onPressFn}>
        <StandardChipText>
          {label}
        </StandardChipText>
      </StandardChip>
    )
  }
}
