import './App.css'
import './overrides.css'
import Header from './components/layout/Header'
import Hero from './components/others/Hero'
import Footer from './components/layout/Footer'
import Projects from './components/others/Projects'
import Resume from './components/others/Resume'



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Resume/>    
      <Projects />
      <Footer />
    </>
  )
}

export default App
