import React from 'react'
import HeroSection from '../hero/hero'
import TopProducts from '../top-product/top-product'
import NewArible from '../newArible/new-arible'
import NewsLetterForm from '../newsLetter/newsCard'
import DragAnimat from '../drag-animation/dragImag'
import HorizontalMarquee from '../marque/marque'



function Index() {
  return (

        <div>
        
            <HorizontalMarquee />
            <HeroSection/>
            <NewArible />
            <TopProducts/>
            <NewsLetterForm />
            <DragAnimat />
          
          
            
        </div>
       
  )
}

export default Index