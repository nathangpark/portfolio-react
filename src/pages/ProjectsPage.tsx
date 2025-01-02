import ProjectComponent from "../components/ProjectComponent";
import "./../styles/ProjectStyles.css";
import "./../styles/MaximizedProjectStyles.css";

import { Projects } from "../classes/Project";
import { useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import MaximizedProjectComponent from "../components/MaximizedProjectComponent";


const ProjectPage = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [maximizedProject, setMaximizedProject] = useState(Projects.None);

  const ref = useRef(null);

  const onProjectClick = (projectType:Projects) => {
    if (isMaximized) {
      setIsMaximized(false);
      document.body.style.overflow = "auto";
    } else {
      setIsMaximized(true);
      setMaximizedProject(projectType);
      document.body.style.overflow = "hidden";
    } 
  }

  return (
    <div className="page">
      <h1 className="page-header">Projects</h1>
      <h1 className="projects-container-title">Top Projects</h1>
      <div className="projects-container themed-light">
        <ProjectComponent
          projectType={Projects.Wordle}
          onProjectClick={onProjectClick}
        />
        <ProjectComponent
          projectType={Projects.Plotter}
          onProjectClick={onProjectClick}
        />
        <ProjectComponent
          projectType={Projects.Poker}
          onProjectClick={onProjectClick}
        />
        <ProjectComponent
          projectType={Projects.Platformer}
          onProjectClick={onProjectClick}
        />
        <ProjectComponent
          projectType={Projects.TicTacToe}
          onProjectClick={onProjectClick}
        />  
      </div>
      <div className="front">
        <TransitionGroup>
          {isMaximized && (
            <CSSTransition key={0} timeout={200} classNames="fade" nodeRef={ref}>
              <div key={0} ref={ref}>
                <MaximizedProjectComponent projectType={maximizedProject} onProjectClick={onProjectClick}></MaximizedProjectComponent>
              </div>
            </CSSTransition>
          )}  
        </TransitionGroup>
      </div>
    </div>
  );
};

export default ProjectPage;
