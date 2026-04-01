import React from 'react'
import Container from '../Container'
import api from '@/utils/api'

const HomeHeroSlider = async() => {
  const {data:products} = await api({url :"products"})
   console.log(products);
  return (
    <Container className=''>
      <div>

      </div>
    </Container>
  )
}

export default HomeHeroSlider
