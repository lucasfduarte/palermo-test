import React from 'react'
import { DividerView } from './styled'

export interface iProps {
  spacing?: number
  noBorder?: boolean
}

export const Divider = ({ spacing, noBorder }: iProps) => {
  return (
    <DividerView spacing={spacing || 8} noBorder={noBorder} />
  )
}
