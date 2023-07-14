import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Category from './Category/Category';
import Testimonial from './Testimonial/Testimonial';
import TopSells from './TopSells/TopSells';
import Banner from './Banner/Banner';

function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <TopSells />
        <Category />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home