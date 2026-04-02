import React from 'react'
import Container from '../Container'
import api from '@/utils/api'
import HomeHeroLeft from './HomeHeroLeft'
import HomeHeroRight from './HomeHeroRight'

const HomeHero = async() => {
  const {data:products} = await api({url :"products"})
   console.log(products);
  return (
    <Container className=''>
      <div className='flex justify-between items-center'>
        <HomeHeroLeft/>
        <HomeHeroRight/>
      </div>
    </Container>
  )
}

export default HomeHero
