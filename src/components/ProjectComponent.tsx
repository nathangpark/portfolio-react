import { Tools } from "./ToolsComponent";
import ToolsComponent from "./ToolsComponent";

interface Props {
  projectTitle: string,
  srcImage: string,
  toolsUsed: Tools[],
}

const ProjectComponent = ({ projectTitle, srcImage, toolsUsed }: Props) => {
  return (
    <div className="project-parent">
      <img className="project-image" src={srcImage}/>
      <div className="project-title">{projectTitle}</div>
      <div className="project-bottom"/>
      <div className="tool-container">
        {toolsUsed.map((item) => (
          <ToolsComponent tool={item}></ToolsComponent>
        ))}
      </div>
    </div>
  )
}

export default ProjectComponent;