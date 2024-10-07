import ProjectComponent from "../components/ProjectComponent";
import "./../styles/ProjectStyles.css";

import { Tools } from "../components/ToolsComponent";

const ProjectPage = () => {
  return (
    <div className="page">
      <h1 className="page-header">Projects</h1>
      <div className="projects-container">
        <ProjectComponent
          projectTitle="2D Plotter"
          srcImage="./plotter.png"
          toolsUsed={[Tools.Python]}
          link="https://github.com/nathangpark/plotter-python/tree/main"
        />
        <ProjectComponent
          projectTitle="Poker"
          srcImage="./PokerBackground.png"
          toolsUsed={[Tools.React, Tools.Vite, Tools.TypeScriptX]}
          link="https://github.com/nathangpark/poker-react"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
