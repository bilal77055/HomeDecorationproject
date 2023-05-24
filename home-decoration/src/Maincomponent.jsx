import React from 'react'
import { Container } from 'react-bootstrap'
import Navbr from './Components/Nav'
import Cards from './Cards'

const Maincomponent = () => {
  return (
    <div>
          <Container fluid className='m-0 p-0 app'>
      <Navbr />

   
      <Cards />
</Container>
    </div>
  )
}

export default Maincomponent
