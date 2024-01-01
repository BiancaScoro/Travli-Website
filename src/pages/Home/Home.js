import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import homebg from '../../assets/Beach.png'
import Banff from "../../assets/Banff.jpg"
import CinqueTerre from "../../assets/cinque terre.jpg"
import Iceland from "../../assets/iceland.jpg"
import GrandTeton from "../../assets/grand teton.jpg"
import '../../pages/Home/Home.css'
import MediaCard from '../../components/card/Card'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <section className="home">
       <div className='header'>
          <Navbar />
            <div className='home-bg-image' style={{ backgroundImage: `url(${homebg})` }}>
              <h1>EXPLORE THE <br /> WORLD</h1>
            </div>
        </div>
        <div className='searchbar-container'>
        <div className="searchbar-grid">
          <div className="destinationInput">
            <label htmlFor='destination'>DESTINATION</label>
            <div className="input flex"><input type="text" placeholder="Enter Destination" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor='date'>DATE</label>
            <div className="input flex"><input type="date" />
            </div>
          </div>
          <div className="personInput">
            <label htmlFor='person'>PEOPLE</label>
            <div className="input flex"><input type="text" placeholder="Enter no. of people" />
           </div>
          </div>
          <div className="search-button-container">
          <button className='search-button'>SEARCH</button>
          </div>
        </div>
        </div>
        <div className="recommended-container">
          <div className="title">
            <h1>RECOMMENDED <br /> DESTINATIONS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. <br /> Vestibulum pharetra massa erat, vel faucibus sem dignissim at.</p>
          </div>
          <div className="cards">
              <MediaCard 
               title="Banff National Park"
               image={Banff}
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. "
              />
              <MediaCard
               title="Cinque Terre"
               image={CinqueTerre}
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula."
              />
              <MediaCard 
                title="Iceland"
                image={Iceland}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula. "
              />
              <MediaCard 
              title="Grand Teton"
              image={GrandTeton}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dapibus ligula."
              />
          </div>
        </div>
        <Footer />
    </section>
  )
}

export default Home