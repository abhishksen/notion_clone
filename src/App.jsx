import { FaArrowRight } from 'react-icons/fa'
import './App.css'
import NavbarLeft from './components/header/NavbarLeft'
import NavbarRight from './components/header/NavbarRight'
import HeroContainer from './components/hero/HeroContainer'
import Footer from './components/footer/Footer'
import StatCards from './components/hero/StatCards'
import StatCardWithImage from './components/hero/StatCardWithImage'

function App() {

  return (
    <>
      {/* Navbar */}
      <header className={'header'}>
        <NavbarLeft />
        <NavbarRight />
      </header>
      {/* Hero */}
      <main className={'main'}>
        <HeroContainer />
      </main>
      {/* section */}
      <div className="main">
        <div className="container">
          <h1 className="title h3">Millions run on Notion every day</h1>
          <p className="subtitle p">
            Powering the world’s best teams, from next-generation startups to established enterprises.
          </p>
          <button className="btn extra nobackgroundbtn">Read Customer Reviews <FaArrowRight /></button>
          <img src="/main2.png" alt="hero image" className="hero-img" />
          <img src="/main5.png" alt="hero image" className="hero-img" />
          <p className="subtitle h4">We got rid of nearly a dozen different tools because of <br /> what Notion does for us.</p>
          <div className='name-plate'>
            <img src="/matlablogo.png" alt="matlab logo" className="logo" />
            <div className='name-plate-text'>
              <h3>Justin Watt</h3>
              <p>Director of Ops & Marketing, MetaLab</p>
            </div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="main">
        <div className="container">
          <h1 className="title h3">Join a global movement. <br /> Unleash your creativity.</h1>
          <p className="subtitle p">
            Our vibrant community produces content, teaches courses, and leads events all over <br /> the world.
          </p>
          <button className="btn extra nobackgroundbtn">Learn more <FaArrowRight /></button>
          <img src="/main3.png" alt="hero image" className="hero-img" />
          <div className="stats">
            <StatCards number={'15M'} text={'Community members'} />
            <StatCards number={'150'} text={'community groups'} />
            <StatCards number={'50'} text={'countries represented'} />
          </div>
          <div className="stats">
            <StatCardWithImage
              title='An always-on support network'
              subtitle='Swap setups and share tips in over 149 online communities.'
              img='/main7.png'
            />
            <StatCardWithImage
              title='Choose your language'
              subtitle='Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!'
              img='/main6.png'
            />
          </div>
        </div>
      </div>

      {/* section */}
      <div className="main">
        <div className="container">
          <h1 className="title">Get started for free</h1>
          <p className="subtitle p">
            lay around with it first. Pay and add your team later.
          </p>
          <div className='btn-container'>
            <button className="btn">Try Notion free</button>
            <button className="btn extra nobackgroundbtn">Request a demo <FaArrowRight /></button>
          </div>
          <img src="/main4.png" alt="hero image" className="hero-img" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
