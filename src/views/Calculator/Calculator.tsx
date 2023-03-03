import React, { useState } from "react";
import Button from "./components/Button/Button";

export default function Calculator(): React.ReactElement {
  const [result, setResult] = useState<string>('');

  function clear(): void {
    setResult('');
  }

  function percentage(): void {
    setResult((Number(result) / 100).toString());
  }

  function changeSign(): void {
    setResult((-(Number(result))).toString());
  }

  function handleClick(element: React.MouseEvent<HTMLButtonElement>): void {
    if (result.length > 12) {
      alert('Não é possível inserir mais digitos!');
      return;
    }
    setResult(result.concat(element.currentTarget.name))
  }

  function calculate(): void {
    try {
      // eslint-disable-next-line no-eval
      const operationResult = eval(result);

      if (Number.isNaN(operationResult) || typeof operationResult !== 'number') {
        alert('Conta inválida!')
        return
      }

      setResult(operationResult.toString().slice(0, 6))
    } catch (error) {
      alert('Conta inválida');
      return;
    }
  }

  return (
    <div className="calculator">
      <div className="wrapper">
        <div className="display">
          {result !== ''
            ? <span className="result">{result}</span>
            : <span className="result">0</span>
          }
        </div>
        <Button type='special' value='AC' onClick={clear}>AC</Button>
        <Button type='special' value='+/-' onClick={changeSign}>+/-</Button>
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
        <Button type='numeric' value='.' onClick={handleClick} hidden>''</Button>
        <Button type='operation' value='' onClick={calculate}>=</Button>
      </div>
    </div>
  );
}