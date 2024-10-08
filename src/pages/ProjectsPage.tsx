import ProjectComponent from "../components/ProjectComponent";
import "./../styles/ProjectStyles.css";

import { Tools } from "../components/ToolsComponent";
import { Project, Projects } from "../classes/Project";
import { useState } from "react";
import MaximizedProjectComponent from "../components/MaximizedProjectComponent";

const ProjectPage = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [maximizedProject, setMaximizedProject] = useState(Projects.None);

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
      {isMaximized && (<MaximizedProjectComponent projectType={maximizedProject} onProjectClick={onProjectClick}></MaximizedProjectComponent>)}
    </div>
  );
};

export default ProjectPage;
