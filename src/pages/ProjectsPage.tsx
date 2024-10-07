import ProjectComponent from "../components/ProjectComponent";
import './../styles/ProjectStyles.css'

import { Tools } from "../components/ToolsComponent";

const ProjectPage = () => {
  return (
    <div className="page">
      <h1 className="page-header">Projects</h1>
      <div className="projects-container">
        <ProjectComponent projectTitle="Poker" srcImage="./PokerBackground.png" toolsUsed={[Tools.React]}/>
        <ProjectComponent projectTitle="Poker" srcImage="./PokerBackground.png" toolsUsed={[Tools.React, Tools.React, Tools.React]}/>
      </div>
     


    </div>
  )
}

export default ProjectPage;