import React from 'react'
import homebg from '../../assets/Beach.png'
import '../../pages/Packages/Packages.css'
import Navbar from '../../components/navbar/Navbar'
import Waterfall from '../../assets/Seljalandsfoss.jpg'
import Greece from '../../assets/santorini.jpg'
import Sahara from '../../assets/sahara.jpg'
import Yosemite from '../../assets/yosemite.jpg'
import venice from '../../assets/venice.jpg'
import hamburg from '../../assets/hamburg.jpg'
import MediaCard from '../../components/card/Card'
import Footer from '../../components/footer/Footer'

const Packages = () => {
  return (
    <section className='packages'>
         <div className='packages-header'>
          <Navbar />
            <div className='packages-bg-image' style={{ backgroundImage: `url(${homebg})` }}>
              <h1>EXPLORE THE <br /> WORLD</h1>
            </div>
        </div>
        <div className="packages-container">
          <div className="featured">
            <h1>FEATURED PACKAGES</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. <br /> Vestibulum pharetra massa erat, vel faucibus sem dignissim at.</p>
          </div>
          <div className="packages-cards">
              <MediaCard 
               title="Seljalandsfoss"
               image={Waterfall}
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. "
              />
              <MediaCard
               title="Santorini Blue Dome"
               image={Greece}
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula."
              />
              <MediaCard 
                title="Gobi Desert"
                image={Sahara}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. "
              />
               <MediaCard 
                title="Yosemite National Park"
                image={Yosemite}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. "
              />
               <MediaCard 
                title="Venice, Italy"
                image={venice}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. "
              />
               <MediaCard 
                title="Hamburg, Germany"
                image={hamburg}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. "
              />
          </div>
        </div>
        <Footer />
    </section>
  )
}

export default Packages