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
    </>
  )
}

export default App
