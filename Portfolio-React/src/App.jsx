import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <body id="crt">
          <div className="scanline"></div>
          <Hero />
          <About />
          <Projects />
          <Experience />
        </body>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
