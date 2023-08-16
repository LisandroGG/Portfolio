import Main from './components/Main/Main.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import TechSkills from "./components/TechSkills/TechSkills"

function App() {

  return (
    <div className="bg-zinc-100">
      <Nav />
      <Main />
      <TechSkills />
      <Footer />
    </div>
  )
}

export default App
