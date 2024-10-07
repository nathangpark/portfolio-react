import { Tools } from "./ToolsComponent";
import ToolsComponent from "./ToolsComponent";

interface Props {
  projectTitle: string,
  srcImage: string,
  toolsUsed: Tools[],
  link: string,
}

const ProjectComponent = ({ projectTitle, srcImage, toolsUsed,link }: Props) => {
  return (
    <a href={link} target="_blank">
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
    </a>
  )
}

export default ProjectComponent;