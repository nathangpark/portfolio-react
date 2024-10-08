import { ReactElement } from "react";
import { Tools } from "../components/ToolsComponent";

export enum Projects {
  Poker = "Poker",
  Plotter = "Plotter",
  None = "not to be displayed"
}


export class Project {
  project: Projects;
  projectTitle: string;
  imgHead: string;
  toolsUsed: Tools[];
  ghLink: string;
  description: ReactElement;

  constructor (project: Projects){
    this.project = project;

    switch (project){
      case Projects.Poker:
        this.projectTitle = "Poker";
        this.imgHead = "./PokerBackground.png";
        this.toolsUsed  = [Tools.React, Tools.Vite, Tools.TypeScriptX];
        this.ghLink = "https://github.com/nathangpark/poker-react";
        this.description = (
          <>
            <h2>
              Test
            </h2>
          </>
        )
        break;
      case Projects.Plotter:
        this.projectTitle = "2D Plotter";
        this.imgHead = "./plotter.png";
        this.toolsUsed  = [Tools.Python];
        this.ghLink = "https://github.com/nathangpark/plotter-python/tree/main";
        this.description = (
          <>
            <h3>
              Description
            </h3>
            <p>
              The Precision Plotter is a versatile and user-friendly device designed to cater to a variety of plotting needs. Equipped with three distinct operating modes—Etch-A-Sketch, Math Mode, and G-Code Mode—this plotter offers flexibility for users ranging from hobbyists to professionals. Whether you are looking to engage in freehand drawing, plot complex mathematical functions, or import and execute G-Code files, the Precision Plotter is engineered to handle these tasks with ease.
            </p>
            <h3>
              Components
            </h3>
            <p>The following components were used in the design of the plotter:</p>
            <ul>
              <li>Raspberry Pi 4 (RP4)</li>
              <li>Stepper Motors</li>
              <li>Rotary Encoders</li>
            </ul>
          </>
        )
        break
        break;  
      default:    
        this.projectTitle = project;
        this.imgHead = "";
        this.toolsUsed = [];
        this.ghLink = "";
        this.description = (<></>)
    }
  }

  public getProjectTitle(){
    return this.projectTitle;
  }

  public getProjectImg(){
    return this.imgHead;
  }

  public getToolsUsed(){
    return this.toolsUsed;
  }

  public getGHLink(){
    return this.ghLink;
  }

  public getDescription(){
    return this.description;
  }

}

