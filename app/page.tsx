import HomeAbout from '@/components/home/HomeAbout'
import HomeDiscountProducts from '@/components/home/HomeDiscountProducts'
import HomeHero  from '@/components/home/HomeHero'
import HomePopularCategories from '@/components/home/HomePopularCategories'
import HomePopularProducts from '@/components/home/HomePopularProducts'
import HomeHotDeals from '@/components/home/HomeHotDeals'
import HomeSummerSale from '@/components/home/HomeSummerSale'
import HomeFeaturedProducts from '@/components/home/HomeFeaturedProducts'
import HomeLatestNews from '@/components/home/HomeLatestNews'
import HomeComments from '@/components/home/HomeComments'
import HomeOurBlog from '@/components/home/HomeOurBlog'

const HomePage = () => {
  return (
    <section>
      <HomeHero/>
      <HomeAbout/>
      <HomePopularCategories/>
      <HomePopularProducts/>
      <HomeDiscountProducts/>
      <HomeHotDeals/>
      <HomeSummerSale/>
      <HomeFeaturedProducts/>
      <HomeLatestNews/>
      <HomeComments/>
      <HomeOurBlog/>
    </section>
  )
}

export default HomePage
