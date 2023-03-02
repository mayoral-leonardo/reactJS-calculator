import React, { useState } from "react";
import "./Calculator.css";

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
        <button className="special-button" onClick={clear}>AC</button>
        <button className="special-button" onClick={changeSign}>+/-</button>
        <button className="special-button" onClick={percentage}>%</button>
        <button name='/' className="light-blue" onClick={handleClick}>
          &divide;
        </button>
        <button name='7' className="gray" onClick={handleClick}>
          7
        </button>
        <button name='8' className="gray" onClick={handleClick}>
          8
        </button>
        <button name='9' className="gray" onClick={handleClick}>
          9
        </button>
        <button name='*' className="light-blue" onClick={handleClick}>
          &times;
        </button>
        <button name='4' className="gray" onClick={handleClick}>
          4
        </button>
        <button name='5' className="gray" onClick={handleClick}>
          5
        </button>
        <button name='6' className="gray" onClick={handleClick}>
          6
        </button>
        <button name='-' className="light-blue" onClick={handleClick}>
          &ndash;
        </button>
        <button name='1' className="gray" onClick={handleClick}>
          1
        </button>
        <button name='2' className="gray" onClick={handleClick}>
          2
        </button>
        <button name='3' className="gray" onClick={handleClick}>
          3
        </button>
        <button name='+' className="light-blue" onClick={handleClick}>
          +
        </button>
        <button name='0' className="gray" onClick={handleClick}>
          0
        </button>
        <button name='.' className="gray" onClick={handleClick}>
          ,
        </button>
        <button name='' className="gray" style={{ visibility: "hidden" }}>
          ''
        </button>
        <button name='' className="light-blue" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}