import React, { useEffect, useRef, useState } from 'react'
import BodyContent from '../BodyContent/BodyContent'
import HeaderContent from '../HeaderContent/HeaderContent'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Products from '../Products/Products';

function Contact() {
  const [input, setInput] = useState("add content here..");
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      setInput("add content here..");
    } else {
      setInput(e.target.value);
    }
  }

  const counterRef = useRef(0);
  const inputRef = useRef();
  const inputRef2 = useRef();

  useEffect(() => {
    // setCount(count+1);
    counterRef.current = counterRef.current + 1;
    inputRef.current.style.backgroundColor = 'green';
  })

  const clickButton = () => {
    if (inputRef2.current.value == "") {
      inputRef2.current.focus()
    } else if (inputRef2.current.value > 10) {
      alert('value is greater than 10')
    } else {
      alert('value is lower than or equal 10')
    }
  }

  //--------------rest operator

  const sumfunction = (...totalNumbers) => {
    let total = 0;
    totalNumbers.forEach(element => {
      total += element
    });
    return total;
  }
  // console.log(sumfunction(1,2,3,4,5));

  const myfunction = (name, channel, ...rest) => {
    // console.log(name, channel, rest);
  }
  myfunction("nuwan", "youTube", 1, 2, 3, 4, 5);
  //---------------------------Spread

  let arr = [1, 2, 3, 4, 5]
  console.log(Math.min(...arr));

  //---------------------------------------exercise

  const products = [{ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }, { "id": 2, "title": "Mens Casual Premium Slim Fit T-Shirts ", "price": 22.3, "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "rating": { "rate": 4.1, "count": 259 } }, { "id": 3, "title": "Mens Cotton Jacket", "price": 55.99, "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.", "category": "men's clothing", "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "rating": { "rate": 4.7, "count": 500 } },]

  return (
    <>
      <HeaderContent />
      <BodyContent>
        <h3>How to use react Hooks - useRef</h3>
        <Form.Control type="text" autoComplete='off' style={{ width: '30%' }} onChange={handleChange} />
        <p>You have input {input}</p>
        <p>Rendered {counterRef.current}</p>
        <Form.Control type="text" style={{ width: '30%' }} ref={inputRef} />
        <br />
        <Form.Control type="text" style={{ width: '30%' }} ref={inputRef2} />
        <Button variant="dark" onClick={clickButton}>button</Button>
      </BodyContent>

      {
        products.map((product => {
          console.log(product);
          return (
            // <Products key={product.id} title={product.title} 
            // description={product.description} category={product.category} rate={product.rating.rate}/>
            <Products key={product.id} {...product}/>
          )
        }))
      }

    </>
  )
}

export default Contact