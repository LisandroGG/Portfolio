import Main from './components/Main/Main.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import TechSkills from "./components/TechSkills/TechSkills"
import Contact from "./components/Contact/Contact.jsx"
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'

function App() {

  return (
    <div className="bg-zinc-800 text-white">
      <Nav />
        <div className='px-20'>
          <Main />
          <About />
          <TechSkills />
          <Projects />
          <Contact />
        </div>
      <Footer />
    </div>
  )
}

export default App
