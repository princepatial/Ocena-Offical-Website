import React from 'react'


import './Service.css'

const Service = () => {
  return (
    <div className='service-main'>
         
      <div className='three-block'>
        <div className='first-block'>
          <h1>Customized Smart Contracts</h1>
          <p>Offering customized smart contracts as a service enhances business efficiency through automated, secure, and transparent processes. This brings cost savings, accuracy, and global accessibility.</p>
          <button id='symbol'>&#8811;</button>
        </div>

        <div className='second-block'>
          <h1>Wallet Development</h1>
          <p id='second-para1'>Decentralized wallets enable instant, global, and cost-effective transactions, fostering international business expansion. By minimizing delays and facilitating large transactions in seconds, they revolutionize cross-border trade with unparalleled efficiency.</p>
          <button id='symbol'>&#8811;</button>
        </div>

        <div className='third-block'>
          <h1>DeFi 2.0 Development</h1>
          <p>Embrace DeFi for token swapping, liquidity provision, and exchanges—experience heightened financial inclusivity, lower transaction costs, increased liquidity, transparent automation, 24/7 accessibility, and reduced dependence on traditional banking.</p>
          <button id='symbol'>&#8811;</button>
        </div>
      </div>

      <div className='video-container'>
        <video autoPlay muted loop>
          <source src="https://ocenass.s3.ap-southeast-2.amazonaws.com/Services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>




      <div className='three-block1'>
        <div className='forth-block'>
          <h1>Metaverse Development</h1>
          <p>Unlock new dimensions in commerce, communication, and recreation through Metaverse development. Users can seamlessly explore and connect in virtual realms, transforming shopping, meetings, and gaming into immersive, next-level experiences.</p>
          <button id='symbol'>&#8811;</button>
        </div>

        <div className='fifth-block'>
          <h1>NFT Marketplace Development</h1>
          <p>Harness the power of NFTs for business growth-enabling real-time asset trading, automating royalty distribution, establishes digital asset authenticity, fostering innovation, and cultivating a thriving ecosystem of creators and collectors.</p>
          <button id='symbol'>&#8811;</button>
        </div>

        <div className='sixth-block'>
          <h1>Dapp Development</h1>
          <p>Transforming your ideas into reality, our dApp developers seamlessly integrate decentralized solutions into your existing infrastructure. Optimize resources, delivering cost-effective solutions tailored to your business requirements.</p>
          <button id='symbol'>&#8811;</button>
        </div>
      </div>
      












    </div>
  )
}

export default Service
