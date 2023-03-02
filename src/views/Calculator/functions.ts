import { _mathOperations } from './types'

export const calculatorFunctions: {[key in _mathOperations]: Function} = {
  add: (firstNumber: number, secondNumber: number) => firstNumber + secondNumber,
  substraction: (firstNumber: number, secondNumber: number) => firstNumber - secondNumber,
  multiplication: (firstNumber: number, secondNumber: number) => firstNumber * secondNumber,
  division: (firstNumber: number, secondNumber: number) => firstNumber / secondNumber,
}