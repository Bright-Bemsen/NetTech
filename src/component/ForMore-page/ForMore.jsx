import React from 'react'
import Product from '../Product-page/Product';
import { Link } from 'react-router-dom'

function ForMore() {
  return (
    <div>
      <h1>For More</h1>
      <Product
     Name="Work Station"
     Description="i7"
     Price={150000}/>

     <Product
     Name="Pistol Gun"
     Description="100 Rounds New"
     Price={9000000}/>

     <Product
     Name="Camon 19"
     Description="Latest"
     Price={190000}/>

     <Product
     Name="LEDMI"
     Description="Latest"
     Price={200000}/>

<Link to='/'>Back</Link>
    </div>
  )
}

export default ForMore
