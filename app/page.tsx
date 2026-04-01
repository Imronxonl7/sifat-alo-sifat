import HomeAboutCards from '@/components/home/HomeAboutCards'
import HomeCategories from '@/components/home/HomeCategories'
import HomeDayOfTheDeal from '@/components/home/HomeDayOfTheDeal'
import HomeDiscountProducts from '@/components/home/HomeDiscountProducts'
import HomeFreshFruits from '@/components/home/HomeFreshFruits'
import HomeHeroSlider from '@/components/home/HomeHeroSlider'
import HomeLatestBlog from '@/components/home/HomeLatestBlog'
import HomeNewArrials from '@/components/home/HomeNewArrials'
import HomeTopMostProducts from '@/components/home/HomeTopMostProducts'
import React from 'react'

const HomePage = () => {
  return (
    <section>
      <HomeHeroSlider/>
      <HomeCategories/>
      <HomeDayOfTheDeal/>
      <HomeFreshFruits/>
      <HomeNewArrials/>
      <HomeDiscountProducts/>
      <HomeAboutCards/>
      <HomeTopMostProducts/>
      <HomeLatestBlog/>
    </section>
  )
}

export default HomePage
