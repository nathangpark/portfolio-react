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

  constructor (project: Projects){
    this.project = project;

    switch (project){
      case Projects.Poker:
        this.projectTitle = "Poker";
        this.imgHead = "./PokerBackground.png";
        this.toolsUsed  = [Tools.React, Tools.Vite, Tools.TypeScriptX];
        this.ghLink = "https://github.com/nathangpark/plotter-python/tree/main";
        break;
      case Projects.Plotter:
        this.projectTitle = "2D Plotter";
        this.imgHead = "./plotter.png";
        this.toolsUsed  = [Tools.Python];
        this.ghLink = "https://github.com/nathangpark/poker-react";
        break;  
      default:    
        this.projectTitle = project;
        this.imgHead = "";
        this.toolsUsed = [];
        this.ghLink = "";
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

}

