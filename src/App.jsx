// Importing necessary modules and components from the application
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

// App component - the main component of the application
const App = () => {
  // Returning the JSX (UI) structure
  return (
    // Using BrowserRouter for handling routing in the application
    <BrowserRouter>
      {/* Main container with a relative positioning and a z-index of 0 */}
      <div className="relative z-0 bg-primary">
        {/* Container with a background image set as a hero pattern */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Rendering the Navbar component */}
          <Navbar />
          {/* Rendering the Hero component */}
          <Hero />
        </div>
        {/* Rendering various sections of the application */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        {/* Container with relative positioning and a z-index of 0 */}
        <div className="relative z-0">
          {/* Rendering the Contact component */}
          <Contact />
          {/* Rendering the StarsCanvas component */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

// Exporting the App component as the default export
export default App