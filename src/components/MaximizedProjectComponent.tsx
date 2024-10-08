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
      <div className="maximized-project-parent">
        <img src={project.getProjectImg()} className="maximized-project-img" />
        {project.getToolsUsed().map((item) => (
          <ToolsComponent key={item} tool={item}></ToolsComponent>
        ))}
        <h1 className="maximized-project-title">{project.getProjectTitle()}</h1>
        <p className="maximized-project-description">
          Something something something
        </p>
        <a href={project.getGHLink()} target="_blank">
          <img src="./github-mark-white.svg"/>
        </a>
      </div>
    </>
  );
};

export default MaximizedProjectComponent;
