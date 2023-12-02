import { FaArrowRight } from 'react-icons/fa'
import './App.css'
import NavbarLeft from './components/header/NavbarLeft'
import NavbarRight from './components/header/NavbarRight'
import HeroContainer from './components/hero/HeroContainer'

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

    </>
  )
}

export default App
