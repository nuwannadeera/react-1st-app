import React, { useEffect, useState } from 'react'
import BodyContent from '../BodyContent/BodyContent'
import HeaderContent from '../HeaderContent/HeaderContent'
import Button from 'react-bootstrap/Button'

function AboutPage() {

  //--------------------------------------use state
  var [num, setNum] = useState(1);
  var [count, setCount] = useState(0);

  function clickMe() {
    setNum(3);
  }

  const clickMinus = () => {
    setCount(count - 1);
  }
  const clickPlus = () => {
    setCount(count + 1);
  }

  //----------------------------------------useEffect
  var [click, setClick] = useState(0);

  useEffect(() => {
    // alert('my number is 5');
  }, [count, num])

  const clickButton = () => {
    setClick(click + 1);
  }

  useEffect(() => {
    document.title = `clicked ${click} times`
  }, [click])

  //-----------------------------------------------------
  var [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((resp) => resp.json())
      .then((blogPosts) => setPost(blogPosts));
  },[])

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

        <Button variant="dark" onClick={clickButton}>button</Button>
        <h2>clicked {click} times</h2>
        <br/>
        <ul>
          {posts && posts.map(
            (post)=>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </BodyContent>
    </>
  )
}

export default AboutPage