import { useRef, useState } from "react";
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

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // is needed to keep transitions intact after added a ref to CSSTransition and the following div
  const getNodeRef = () => {
    switch (currentHeader) {
      case Headers.Home:
        return homeRef;
      case Headers.AboutMe:
        return aboutRef;
      case Headers.Projects:
        return projectsRef;
      case Headers.Contact:
        return contactRef;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition key={currentHeader} timeout={200} classNames="fade" nodeRef={getNodeRef()}>
          <div ref={getNodeRef()} key={currentHeader}>
            {currentHeader === Headers.Home && <HomePage/>}
            {currentHeader === Headers.AboutMe && <AboutMePage/>}
            {currentHeader === Headers.Projects && <ProjectPage/>}
            {currentHeader === Headers.Contact && <ContactPage/>}
          </div>
        </CSSTransition>
      </TransitionGroup>
      <HeaderComponent onSelectItem={setCurrentHeader} />
    </div>
  );
}

export default App;
