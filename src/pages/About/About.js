import React from 'react'
import homebg from '../../assets/Beach.png'
import Navbar from '../../components/navbar/Navbar'
import '../About/About.css'
import lighthouse from '../../assets/lighthouse.jpg'
import greenhills from '../../assets/greenhills.jpg'
import MediaControlCard from '../../components/card/AboutCard'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <section className="about">
        <div className='about-header'>
          <Navbar />
            <div className='about-bg-image' style={{ backgroundImage: `url(${homebg})` }}>
              <h1>EXPLORE THE <br /> WORLD</h1>
            </div>
        </div>
        <div className="about-container">
          <div className="about-title">
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. <br /> Vestibulum pharetra massa erat, vel faucibus sem dignissim at.</p>
          </div>
          <div className="about-card">
              <MediaControlCard 
               image={lighthouse}
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. Vestibulum pharetra massa erat, vel faucibus sem dignissim at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. Vestibulum pharetra massa erat, vel faucibus sem dignissim at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. Vestibulum pharetra massa erat, vel faucibus sem dignissim at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. Vestibulum pharetra massa erat, vel faucibus sem dignissim at. "
              />
          </div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. <br /> Vestibulum pharetra massa erat, vel faucibus sem dignissim at.</h2>
          <div className="about-card2">
              <MediaControlCard 
               image={greenhills}
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. Vestibulum pharetra massa erat, vel faucibus sem dignissim at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. Vestibulum pharetra massa erat, vel faucibus sem dignissim at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. Vestibulum pharetra massa erat, vel faucibus sem dignissim at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. Vestibulum pharetra massa erat, vel faucibus sem dignissim at. "
              />
          </div>
        </div>
        <Footer />
    </section>
  )
}

export default About