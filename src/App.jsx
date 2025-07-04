import React from 'react'
import Header from './components/Header'
import About from './pages/About'
import Accessibility from './pages/Accessibility'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Venues from './pages/Venues'
import Guide from './pages/Guide'


function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Accessibility />
      <Contact />
      <Venues />
      <Guide/>
      <Footer />
    </div>
  )
}

export default App
