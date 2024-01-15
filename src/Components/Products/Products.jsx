import React from 'react'

function Products(props) {
  return (
    <ul>
        <li><b>Title : </b>{props.title}</li>
        <li><b>Description : </b>{props.description}</li>
        <li><b>Category : </b>{props.category}</li>
        <li><b>Rating : </b>{props.rating.rate}</li>
    </ul>
  )
}

export default Products