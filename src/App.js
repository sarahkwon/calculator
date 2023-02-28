import React, { useState } from 'react'

import { Row } from 'react-bootstrap'

import './App.css'

const Button = (props) => {
  const { value, handleClick } = props

  return (
    <button className="button-style" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
}

function App() {
  const [operation, setOperation] = useState('')
  const [firstValue, setFirstValue] = useState('0')
  const [secondValue, setSecondValue] = useState('0')
  const [result, setResult] = useState('')

  const addValue = (number) => {
    if (result !== '') {
      clearAll()
      setFirstValue(number)
      return
    }

    if (operation === '') {
      addFirstValue(number)
    } else {
      addSecondValue(number)
    }
  }

  const addFirstValue = (number) => {
    if (firstValue === '0') {
      setFirstValue(number)
    } else {
      setFirstValue(firstValue + number)
    }
  }

  const addSecondValue = (number) => {
    if (secondValue === '0') {
      setSecondValue(number)
    } else {
      setSecondValue(secondValue + number)
    }
    
  }

  const clearAll = () => {
    setFirstValue('0')
    setSecondValue('0')
    setOperation('')
    setResult('')
  }

  const setOp = (op) => {
    if (result !== '') {
      setFirstValue(result)
      setResult('')
      setSecondValue('0')
    } 

    if (result === 'undefined') {
      clearAll();
    }

    setOperation(op)
  }

  //result '' --> 12


  //if operation pressed: firstValue = result, (result, secondValue = '')


  //if number pressed: clear everything, restart calculations

  const calculate = () => {
    switch (operation) {
      case '+':
        setResult(String(Number(firstValue) + Number(secondValue)))
        break;
      case '-':
        setResult(String(Number(firstValue) - Number(secondValue)))
        break;
      case '*':
        setResult(String(Number(firstValue) * Number(secondValue)))
        break;
      case '/':
        if (secondValue === '0') {
          setResult('undefined')
        } else {
          setResult(String(Number(firstValue) / Number(secondValue)))
        }
        break;
      default:
        console.log('no op')
    }
  }

  console.log("firstValue: ", firstValue)
  console.log("secondValue: ", secondValue)
  console.log("operation: ", operation)
  console.log("result: ", result)
  return (
    <div>
      <Row className='numbers-style'>
        {firstValue} {operation} {(operation !== '' ) ? secondValue : ''} {(result !== '') ? '= ' + result : ''} 
      </Row>
      <Row>
        <Button value='7' handleClick={addValue} />
        <Button value='8' handleClick={addValue} />
        <Button value='9' handleClick={addValue} />
        <Button value='/' handleClick={setOp}/>
      </Row>
      <Row>
        <Button value='4' handleClick={addValue} />
        <Button value='5' handleClick={addValue} />
        <Button value='6' handleClick={addValue} />
        <Button value='*' handleClick={setOp}/>
      </Row>
      <Row>
        <Button value='1' handleClick={addValue} />
        <Button value='2' handleClick={addValue} />
        <Button value='3' handleClick={addValue} />
        <Button value='-' handleClick={setOp}/>
      </Row>
      <Row>
        <Button value='0' handleClick={addValue} />
        <Button value='.' handleClick={addValue} />
        <Button value='C' handleClick={clearAll}/>
        <Button value='+' handleClick={setOp}/>
      </Row>  
      <Button value='=' handleClick={calculate}/>
    </div>
  );
}

export default App;
