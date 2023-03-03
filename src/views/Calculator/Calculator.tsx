import React, { useState } from "react"
import Button from "./components/Button/Button"
import Display from "./components/Display/Display"

export default function Calculator(): React.ReactElement {
  const [result, setResult] = useState<string>('')

  function clear(): void {
    setResult('')
  }

  function percentage(): void {
    const operationResult = Number(result) / 100
    const formattedToString: string = operationResult.toString()

    if (formattedToString.indexOf('.') > 0){
      setResult(formattedToString.slice(0, formattedToString.indexOf('.') + 5))
      return
    }

    if (formattedToString.length > 12) {
      setResult(formattedToString.slice(0, 12))
      return
    }

    setResult(formattedToString)
    setResult(operationResult.toString())
  }

  function changeSign(): void {
    setResult((-(Number(result))).toString())
  }

  function handleClick(element: React.MouseEvent<HTMLButtonElement>): void {
    if (result.length > 12) {
      alert('Não é possível inserir mais digitos!')
      return
    }
    setResult(result.concat(element.currentTarget.name))
  }

  function calculate(): void {
    try {
      // eslint-disable-next-line no-eval
      const operationResult = eval(result)
      const formattedToString: string = operationResult.toString()

      if (Number.isNaN(operationResult) || typeof operationResult !== 'number') {
        alert('Conta inválida!')
        return
      }
      
      if (formattedToString.indexOf('.') > 0){
        setResult(formattedToString.slice(0, formattedToString.indexOf('.') + 5))
        return
      }

      if (formattedToString.length > 12) {
        setResult(formattedToString.slice(0, 12))
        return
      }


      setResult(formattedToString)
    } catch (error) {
      alert('Conta inválida')
      return
    }
  }

  function removeLastCharacter () {
    setResult(prev => prev.slice(0, -1))
  }

  return (
    <div className="calculator">
      <div className="wrapper">
        <Display result={result}/>

        <Button type='special' value='AC' onClick={clear}>AC</Button>
        <Button type='special' value='' onClick={removeLastCharacter}>&larr;</Button>
        <Button type='special' value='%' onClick={percentage}>%</Button>
        <Button type='operation' value='/' onClick={handleClick}>&divide;</Button>

        <Button type='numeric' value='7' onClick={handleClick}>7</Button>
        <Button type='numeric' value='8' onClick={handleClick}>8</Button>
        <Button type='numeric' value='9' onClick={handleClick}>9</Button>
        <Button type='operation' value='*' onClick={handleClick}>&times;</Button>

        <Button type='numeric' value='4' onClick={handleClick}>4</Button>
        <Button type='numeric' value='5' onClick={handleClick}>5</Button>
        <Button type='numeric' value='6' onClick={handleClick}>6</Button>
        <Button type='operation' value='-' onClick={handleClick}>&ndash;</Button>

        <Button type='numeric' value='1' onClick={handleClick}>1</Button>
        <Button type='numeric' value='2' onClick={handleClick}>2</Button>
        <Button type='numeric' value='3' onClick={handleClick}>3</Button>
        <Button type='operation' value='+' onClick={handleClick}>+</Button>
        
        <Button type='numeric' value='0' onClick={handleClick}>0</Button>
        <Button type='numeric' value='.' onClick={handleClick}>,</Button>
        <Button type='special' value='+/-' onClick={changeSign}>+/-</Button>
        <Button type='operation' value='' onClick={calculate}>=</Button>
      </div>
    </div>
  )
}