import React from 'react'
import logo from "../../assets/travliLogo.png"
import '../../components/footer/Footer.css'

const Footer = () => {
  return (
    <section className="footer">
    <div className="footer-container">
      <img src={logo} className="travlilogo2" alt="TravliLogo" />
      <div className="footer-grid">
        <div className="column1">
         <ul>
          <li className='column-title'>COMPANY</li>
          <li>JOBS</li>
          <li>ABOUT</li>
          <li>DISCOVER</li>
        </ul>
        </div>
        <div className="column2">
          <ul>
          <li className='column-title'>POLICIES</li>
          <li>PRIVACY</li>
          <li>COOKIES</li>
          <li>TERMS OF USE</li>
          </ul>
        </div>
        <div className="column3">
        <ul>
          <li className='column-title'>HELP</li>
          <li >CANCEL OR REBOOK</li>
          <li>SUPPORT</li>
          <li>REFUND INFO</li>
          </ul>
        </div>
        <div className="copyright">
        ©Travli
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer