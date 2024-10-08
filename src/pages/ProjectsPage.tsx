import ProjectComponent from "../components/ProjectComponent";
import "./../styles/ProjectStyles.css";

import { Tools } from "../components/ToolsComponent";
import { Project, Projects } from "../classes/Project";
import { useRef, useState } from "react";
import MaximizedProjectComponent from "../components/MaximizedProjectComponent";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProjectPage = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [maximizedProject, setMaximizedProject] = useState(Projects.None);

  const ref = useRef(null);

  const onProjectClick = (projectType:Projects) => {
    if (isMaximized) {
      setIsMaximized(false);
    } else {
      setIsMaximized(true);
      setMaximizedProject(projectType);
    } 
  }

  return (
    <div className="page">
      <h1 className="page-header">Projects</h1>
      <div className="projects-container">
        <ProjectComponent
          projectType={Projects.Plotter}
          onProjectClick={onProjectClick}
        />
        <ProjectComponent
          projectType={Projects.Poker}
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
      </div>
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
  );
};

export default ProjectPage;
