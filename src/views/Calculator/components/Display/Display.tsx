import React from 'react'
import { IDisplay } from './types'

export default function Display ({result}: IDisplay) {
  return (
    <div className="display">
    {result !== ''
      ? <span className="result">{result}</span>
      : <span className="result">0</span>
    }
  </div>
  )
}