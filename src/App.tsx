import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import "./styles/HeaderStyles.css";

import { Headers } from "./components/HeaderComponent";
import HeaderComponent from "./components/HeaderComponent";

import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [currentHeader, setCurrentHeader] = useState(Headers.Home);

  return (
    <div className="App">
      <HeaderComponent onSelectItem={setCurrentHeader} />
      <TransitionGroup>
        <CSSTransition key={currentHeader} timeout={300} classNames="fade">
          <div>
            {currentHeader === Headers.Home && <HomePage />}
            {currentHeader === Headers.AboutMe && <AboutMePage />}
            {currentHeader === Headers.Projects && <ProjectPage />}
            {currentHeader === Headers.Contact && <ContactPage />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
