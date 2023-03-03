import { ReactNode } from "react"

export type _buttonTypes = 'numeric' | 'special' | 'operation'

export interface IButton {
  children: ReactNode
  hidden?: boolean
  onClick: (element: React.MouseEvent<HTMLButtonElement>) => void
  type: _buttonTypes
  value: string
}