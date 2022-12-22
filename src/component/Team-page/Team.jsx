import React from 'react'
import '../Team-page/Team.css'
import Product from '../Product-page/Product';

function Team() {
  return (
    <div>
      <h3>Welcome To Our Team</h3>
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
    </div>
  )
}

export default Team
