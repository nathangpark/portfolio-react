import { Project, Projects } from "../classes/Project";
import ToolsComponent from "./ToolsComponent";

interface Props {
  projectType: Projects;
  onProjectClick: (a: Projects) => void;
}

const MaximizedProjectComponent = ({ projectType, onProjectClick }: Props) => {
  let project = new Project(projectType);
  return (
    <>
      <div
        className="maximized-project-background"
        onClick={() => onProjectClick(projectType)}
      />
      <div className="maximized-project-parent themed">
        <div className="maximized-project-scrollable">
          <p className="maximized-project-description">
            {project.getDescription()}
          </p>
          <div className="maximized-project-tools-container">
            {project.getToolsUsed().map((item) => (
              <ToolsComponent key={item} tool={item}></ToolsComponent>
            ))}
          </div>
        </div> 
        <img
          src={project.getProjectImg()}
          className="maximized-project-image"
        />
        <a href={project.getGHLink()} target="_blank">
          <img
            src="./github-mark-white.svg"
            className="maximized-project-github"
          />
        </a>
        <h1
          className="maximized-close-button"
          onClick={() => onProjectClick(projectType)}
        >
          X
        </h1>
      </div>
    </>
  );
};

export default MaximizedProjectComponent;
