import { Project, Projects } from "../classes/Project";
import { Tools } from "./ToolsComponent";
import ToolsComponent from "./ToolsComponent";

interface Props {
  projectType: Projects,
  onProjectClick: (projectType : Projects) => void
}

const ProjectComponent = ({
  projectType,
  onProjectClick,
}: Props) => {

  let project = new Project(projectType);

  return (
    <div className="project-parent" onClick={()=> onProjectClick(projectType)}>
      <img className="project-image" src={project.getProjectImg()} />
      <div className="project-bottom themed" />
      <div className="project-title">{project.getProjectTitle()}</div>
      <div className="tool-container">
        {project.getToolsUsed().map((item) => (
          <ToolsComponent key={item} tool={item}></ToolsComponent>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
