import React, { useState } from 'react'
import BodyContent from '../BodyContent/BodyContent'
import HeaderContent from '../HeaderContent/HeaderContent'
import Button from 'react-bootstrap/Button'

function AboutPage() {
  var [num , setNum] = useState(1);
  var [count , setCount] = useState(0);

  function clickMe() {
    setNum(3);
  }

  const clickMinus = () => {
    setCount(count--);
  }
  const clickPlus = () => {
    setCount(count++);
  }


  return (
    <>
      <HeaderContent />
      <BodyContent>
        <h3>How to use react Hooks - useState</h3>
        <Button variant="primary" onClick={clickMe}>Click Here</Button>
        <h2>{num}</h2>
        <h3>Counter</h3>
        <Button variant="primary" onClick={clickMinus}>-</Button>
        <Button variant="success" onClick={clickPlus}>+</Button>
        <h2>{count}</h2>
      </BodyContent> 
    </>
  )
}

export default AboutPage