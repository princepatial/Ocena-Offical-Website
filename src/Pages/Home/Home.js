import React, { useState, useCallback, useRef,useEffect } from 'react'
import './Home.css'
import { useMediaQuery } from 'react-responsive';

const Home = () => {

    const [scale, setScale] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const nextContentRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  
    const MAX_SCALE = 2.3;
    const MIN_SCALE = 1;
    const ZOOM_SPEED = 0.2;
    const ANIMATION_DURATION = 1000; // in milliseconds
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
  
      const currentRef = componentRef.current; // Capture the current value

      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);
  
    useEffect(() => {
      if (isVisible && isMobile) {
        const timer = setTimeout(() => {
        }, ANIMATION_DURATION);
        return () => clearTimeout(timer);
      }
    }, [isVisible, isMobile]);
    
    const handleScroll = useCallback((event) => {
      event.preventDefault();
    
      setScale((prevScale) => {
        let newScale;
        if (event.deltaY > 0) {
          newScale = Math.min(prevScale + ZOOM_SPEED, MAX_SCALE);
        } else {
          newScale = Math.max(prevScale - ZOOM_SPEED, MIN_SCALE);
        }
    
        if (newScale === MAX_SCALE && prevScale !== MAX_SCALE && event.deltaY > 0) {
          nextContentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    
        return newScale;
      });
    }, []);
  
    const getIconStyle = (top, left, mobileTop, mobileLeft) => ({
      top: isMobile ? mobileTop : top,
      left: isMobile ? mobileLeft : left,
      opacity: isMobile 
        ? (isVisible ? 1 : 0) 
        : `${scale - 1}`,
      transition: isMobile
        ? `opacity ${ANIMATION_DURATION}ms ease-out, transform ${ANIMATION_DURATION}ms ease-out`
        : 'opacity 0.5s ease-out, box-shadow 0.3s ease-out',
      transform: isMobile && isVisible ? 'scale(1)' : 'scale(0.5)',
      boxShadow: scale > 1 ? `2px 2px ${10 * (scale - 1)}px rgba(0, 0, 0, 0.5)` : 'none',
      zIndex: 2,
      position: 'absolute',
      width: isMobile ? '20px' : '60px',
      height: isMobile ? '20px' : '60px',
    });


    return (
        <>
            <div className='main-container'>
                <div className='main-image'>
                    <img src='../images/main-img.png' alt='image-loading' className='home-img' />
                </div>
                <div className='main-text1'>
                    <h1>Blockchain Solutions</h1>
                    <p>that bridging the gap to secure transactions</p>
                </div>
            </div>








            <div className='two-type'>
                <div className='left-type'>
                    <img src='../images/mask-group.png' alt='mask-group' className='left-img1' />
                    <div className='text-here'>
                        <h1>Consulting</h1>
                        <p id='left-text1'>Consulting where strategic insights meet cutting edge technology. Empowers
                            organisation to navigate the complexities of decentralized system. creating value and
                            enhancing efficiency, transforming innovative ideas into practical applications.</p>
                    </div>
                </div>

                <div className='right-type'>
                    <img src='../images/image1.png' alt='image1' className='bottom-img' />
                    <div className='right-text'>
                        <h1>Design & Development</h1>
                        <p id='right-text1'>Blockchain service is built on a comprehensive design and development that ensures
                            tailored solutions for our clients.We develop smart contracts and blockchain protocols,ensuring
                            rigorous testing at every stage.With our expertise ,we empower businesses to leverage
                            blockchain technology effectively and innovatively.</p>
                    </div>
                </div>
            </div>








            <div className='new-images1'>
                <div className='new-type'>
                    <img src='../images/image2.png' alt='image2' className='bottom-img1' />
                    <div className='right-text'>
                        <h1 id='design'>Documentation</h1>
                        <p id='dev'>Documentation in blockchain is essential for fostering clarity, collaboration and usability
                            throughout the lifecycle of a project, making it easier for developers,users and stakeholders to
                            understand and engage with the system.</p>
                    </div>
                </div>


                <div className='right-type1'>
                    <img src='https://ocenass.s3.ap-southeast-2.amazonaws.com/smallcube.png' alt='smallcube' className='right-img1' />
                    <div className='text-heree'>
                        <h1>Marketing & PR</h1>
                        <p>Marketing and public relation in blockchain builds awareness and trust.Strategic partnership
                            enhances credibility and expand audience.</p>
                    </div>
                </div>

            </div>







            <div className="blockchain-world" ref={componentRef}>
      <div
        className="heading"
        style={{
          textShadow: scale > 1 ? `2px 2px ${8 * (scale - 1)}px rgba(0, 0, 0, 0.5)` : 'none',
          transition: 'text-shadow 0.3s ease-out',
        }}
      >
        <h1>Enter The Blockchain World</h1>
      </div>

      <div className="image-container" onWheel={handleScroll}>
        <div
          className="overlay"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            opacity: scale === MAX_SCALE ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
            position: 'absolute',
            top: -30,
            left: -170,
            width: '200%',
            height: '212%',
            zIndex: 1,
          }}
        ></div>

        <img
          src="https://ocenass.s3.ap-southeast-2.amazonaws.com/digitalworld.png"
          alt="digital-world"
          className="main-image11"
          style={{
            transform: isMobile 
              ? (isVisible ? 'scale(1.2)' : 'scale(1)') 
              : `scale(${scale})`,
            transition: isMobile
              ? `transform ${ANIMATION_DURATION}ms ease-out`
              : 'transform 0.3s ease-out',
            transformOrigin: 'center',
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
            position: 'relative',
            zIndex: 0,
            
          }}
        />

        <div className="icons-overlay">
          <img
            src="https://ocenass.s3.ap-southeast-2.amazonaws.com/money.png"
            alt='money'
            className="icon"
            style={getIconStyle('230px', '640px', '120px', '96%')}
          />
          <img
            src="https://ocenass.s3.ap-southeast-2.amazonaws.com/healthcare.png"
            alt='healthcare'
            className="icon"
            style={getIconStyle('300px', '320px', '149px', '72%')}
          />
          <img
            src="https://ocenass.s3.ap-southeast-2.amazonaws.com/truck.png"
            alt='truck'
            className="icon"
            style={getIconStyle('600px', '500px', '250px', '88%')}
          />
          <img
            src="https://ocenass.s3.ap-southeast-2.amazonaws.com/database.png"
            alt='db'
            className="icon"
            style={getIconStyle('450px', '810px', '200px', '112%')}
          />
          <img
            src="https://ocenass.s3.ap-southeast-2.amazonaws.com/community.png"
            alt='community'
            className="icon"
            style={getIconStyle('600px', '740px', '255px', '104%')}
          />
          <img
            src="https://ocenass.s3.ap-southeast-2.amazonaws.com/bank.png"
            alt='bank'
            className="icon"
            style={getIconStyle('430px', '650px', '200px', '96%')}
          />
        </div>
      </div>
    </div>











            <div className='Proven-leaders'>
                <div className='imagee'>
                    <img src='../images/bg-cube.png' alt='cube-block' className='bg-cube' />
                </div>
                <div className='text-over'>
                    <h1>Proven Leader in Blockchain Development</h1>
                    <p>Campaigns designed to elevate your blockchain project's visibility, attract stakeholders, and foster community engagement. From targeted outreach to impactful brandi</p>
                </div>


                <div className='para-text'>
                    <div className='left-para'>
                        <h1>TRANSPARENT PROCESS</h1>
                        <p>We will keep you informed with updates on every process in our blockchain services, ensuring
                            transparency and clarity at every step. Our commitment to open communication means you’ll
                            have real-time insights into developments, enhancements, and key milestones, fostering trust
                            and engagement .</p>
                    </div>
                    <div className='right-para'>
                        <h1>CUTTING-EDGE SOLUTIONS</h1>
                        <p>We will provide you with cutting-edge solutions in blockchain, designed to enhance efficiency,
                            transparency, and security in your operations. Our innovative offerings, from decentralized
                            finance and asset tokenization to interoperability protocols and smart contract development,
                            are tailored to meet the unique needs of your business.</p>
                    </div>
                </div>


                <div className='para-text1'>
                    <div className='left-para'>
                        <h1>CLINT-CENTRIC APPROACH</h1>
                        <p>we recognize that each client has unique challenges and aspirations in the rapidly evolving
                            blockchain landscape. Our client-centric approach is built on the foundation of truly
                            understanding your needs and objectives, ensuring that our solutions are tailored specifically
                            for you.</p>
                    </div>
                    <div className='right-para'>
                        <h1>EXPERT TEAM</h1>
                        <p>We believe in a collaborative process, working closely with clients to understand their needs
                            and goals. Our experts prioritize communication and transparency, ensuring that you are
                            involved every step of the way.</p>
                    </div>
                </div>

            </div>









            <div className='our-solutions'>
                <h1>Complete Solution for <br /> decentralized Business <br /> Growth</h1>
                <p id='main-text1'>Incorporate decenralization for your business-where trust is build, efficiency is maximized, and innovation unfolds at a pace that ensures constant growth.</p>

                <div className='dapps-icons'>
                    <div className='myicons'>
                        <div className="icon-container">
                            <svg stroke='currentcolor' fill='currentcolor' className='special-icon' strokeWidth="0" role='img' viewBox='0 0 24 24' height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>

                                <path d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z"></path>
                            </svg>
                        </div>
                        <h4>Smart Contract</h4>
                        <p>Smart contract eliminate intermediaries, cut costs, and enhance efficiency.</p>
                        <h2>01</h2>
                    </div>

                    <div className='myicons'>
                        <div className="icon-container">
                            <svg stroke='currentcolor' fill='currentcolor' className='special-icon' strokeWidth="0" role='img' viewBox='0 0 24 24' height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>

                                <path d="M4.87759 3.00293H19.1319C19.4518 3.00293 19.7524 3.15601 19.9406 3.41476L23.7634 8.67115C23.9037 8.86403 23.8882 9.12913 23.7265 9.30438L12.3721 21.6049C12.1848 21.8078 11.8685 21.8205 11.6656 21.6332C11.6558 21.6241 11.6464 21.6147 11.6373 21.6049L0.282992 9.30438C0.121226 9.12913 0.10575 8.86403 0.246026 8.67115L4.06886 3.41476C4.25704 3.15601 4.55766 3.00293 4.87759 3.00293Z"></path>
                            </svg>
                        </div>
                        <h4>DApps</h4>
                        <p>Decentralized apps enhance security, minimize breaches, and broaden global customer reach.</p>
                        <h2>02</h2>
                    </div>

                    <div className='myicons'>
                        <div className="icon-container">
                            <svg stroke='currentcolor' fill='currentcolor' className='special-icon' strokeWidth="0" role='img' viewBox='0 0 16 16' height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>

                                <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z"></path>
                            </svg>
                        </div>
                        <h4>NFT Marketplace</h4>
                        <p>Boost engagement withinteractive NFTS for customer interaction and participation.</p>
                        <h2>03</h2>
                    </div>

                    <div className='myicons'>
                        <div className="icon-container">
                            <svg stroke='currentcolor' fill='currentcolor' className='special-icon' strokeWidth="0" role='img' viewBox='0 0 256 256' height="1em" width="1em" xmlns='http://www.w3.org/2000/svg'>

                                <path d="M240,208H224V115.55a16,16,0,0,0-5.17-11.78l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-88,0H104V160a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8Z"></path>
                            </svg>
                        </div>
                        <h4>Metaverse</h4>
                        <p>Elevate user experience to new heights with groundbreaking metaverse interactions.</p>
                        <h2 id='zero-four'>04</h2>
                    </div>


                </div>
            </div>




            <div className='btn-btn'>
                <a href='https://doodle.com/bp/tubamahmood/meeting'><button id='footer-btn'>Book a Meeting</button> </a>
            </div>






        </>
    )
}

export default Home

