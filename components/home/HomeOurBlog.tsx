import React from 'react'
import Container from '../Container'
import HomeOurBlogCompanies from './HomeOurBlogCompanies'
import HomeOurBlogSocial from './HomeOurBlogSocial'

const HomeOurBlog = () => {
  return (
    <section>
      <Container className="">
        <div>
            <HomeOurBlogCompanies/>
            <HomeOurBlogSocial/>
        </div>
      </Container>
    </section>
  )
}

export default HomeOurBlog
