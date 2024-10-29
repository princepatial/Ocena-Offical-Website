import React from 'react'


import './About.css'

const About = () => {
  return (
    <div className='about-content about-with-footer'>
      <video src='https://imgnv.s3.ap-southeast-2.amazonaws.com/aboutvideo.mp4'  autoPlay 
        loop 
        muted 
        playsInline
        className="background-video"></video>
          
          <div className='main-parent'>
        <div className='text-over-here'>
          <h1>About Us</h1>
          <p id='para'>Founded in 2023, Ocena is your partner in blockchain evolution. Offering custom smart contracts, Dapps, DeFi strategies, NFT platforms, and secure wallets, we redefine industries with decentralized brilliance. Embrace a future where trust and transparency drive business success.</p>
        </div>
        <div className='text-over-here1'>
         <h1>Our Mission</h1>
        <p id='para-one'>Ocena is at the forefront of the blockchain evolution, dedicated to reshaping industries and simplifying daily life through innovative blockchain solutions. Our mission is clear: to empower businesses with custom smart contracts, decentralized applications (Dapps), DeFi strategies, NFT platforms, and secure wallets. We believe in the transformative power of blockchain, where trust and transparency drive business success.</p>
        <p id='para-two'>At Ocena, we are architects of decentralized brilliance, committed to fostering a future where traditional barriers are dismantled. By integrating blockchain solutions, we enable business growth, enhance operational efficiency, and create an ecosystem where trust is paramount. Beyond technological innovation, our mission extends to making people's lives easier by providing user-friendly interfaces, secure platforms, and seamless experiences for the adoption of blockchain technology into everyday life.</p>
        <p id='para-three'>In our pursuit, we envision a world where blockchain empowers individuals and businesses, transcending boundaries and unlocking unprecedented opportunities. Ocena is your steadfast partner on this journey, pioneering solutions that redefine industries, foster growth, and shape a future where trust and transparency drive unparalleled success.</p> 
        </div>
        </div>
    </div>
  )
}

export default About
