import React from 'react'
import '../Product-page/Product.css'


function Product({Name, Description, Price, }) {
  return (
    <div className='product'>
      <h1>{Name}</h1>
      <h2>{Description}</h2>
      <h3>#{Price}</h3>
    </div>
  )
}

export default Product
