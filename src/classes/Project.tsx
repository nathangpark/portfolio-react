import { ReactElement } from "react";
import { Tools } from "../components/ToolsComponent";

export enum Projects {
  Poker = "Poker",
  Plotter = "Plotter",
  Platformer = "Platformer",
  None = "not to be displayed",
}

export class Project {
  project: Projects;
  projectTitle: string;
  imgHead: string;
  toolsUsed: Tools[];
  ghLink: string;
  description: ReactElement;
  date: string;

  constructor(project: Projects) {
    this.project = project;

    switch (project) {
      case Projects.Poker:
        this.projectTitle = "Poker";
        this.imgHead = "./PokerBackground.png";
        this.toolsUsed = [Tools.React, Tools.Vite, Tools.TypeScriptX];
        this.ghLink = "https://github.com/nathangpark/poker-react";
        this.date = "June 2024";
        this.description = (
          <>
            <h1>{this.projectTitle}</h1>
            <p>{this.date}</p>
            <h3>Description</h3>
            <p>
              Developed a poker game using TypeScriptX, Vite, and React, with HTML and CSS for styling, in Visual Studio Code IDE. Hosted entirely on GitHub pages.
            </p>
            <ul>
              <li>Designed intuitive functions and classes to streamline development of game mechanics, such as card storage, winner calculation, and chip distribution, enabling flexible expansion and easier maintenance.</li>
              <li>Constructed and implemented 10+ modular React components representing cards, suits, and card groups for front end design.</li>
              <li>Integrated custom algorithms to simulate intelligent opponents, ranging from 1 to 7 opponents at once.</li>
              <li>Ensured clean, maintainable code with thorough documentation and comments throughout the project</li>
            </ul>
            <h3>Current Features</h3>
            <ul>
              <li>Random cards and card group management</li>
              <li>Betting/Raising, Calling/Checking, Folding</li>
              <li>Variable bets</li>
              <li>Complex algorithms for opponent's choices</li>
              <li>Chips management</li>
            </ul>
            <p>
              Play the game{" "}
              <a href="https://nathangpark.github.io/poker-react/" target="_blank">HERE</a>
            </p>
          </>
        );
        break;
      case Projects.Plotter:
        this.projectTitle = "2D Plotter";
        this.imgHead = "./plotter.png";
        this.toolsUsed = [Tools.Python];
        this.ghLink = "https://github.com/nathangpark/plotter-python/tree/main";
        this.date = "April 2024"
        this.description = (
          <>
            <h1>{this.projectTitle}</h1>
            <p>{this.date}</p>
            <h3>Overall Description</h3>
            <p>
              Four month long project that involved a team of five engineering students, tasked with building a functional 2D plotter,
              including its circuitry and software using a Raspberry Pi (RP4).
            </p>
            <h3>Role</h3>
            <p>Lead Software Engineer</p>
            <ul>
              <li>
                Acted as lead software engineer, but worked closely with the circuitry team to design a cohesive product.
              </li>
              <li>
                Constructed 14 efficient Python classes with clear organization, consistent naming, and optimized for RP4 per
                formance. Continuous development improved accuracy by 35%.
              </li>
              <li>
                Developed the user interface and functionality of the plotter to adhere to strict requirements set by the instructors.
              </li>
            </ul>
            <h3>Project Description</h3>
            <p>
              The Precision Plotter is a versatile and user-friendly device
              designed to cater to a variety of plotting needs. Equipped with
              three distinct operating modes—Etch-A-Sketch, Math Mode, and
              G-Code Mode—this plotter offers flexibility for users ranging from
              hobbyists to professionals. Whether you are looking to engage in
              freehand drawing, plot complex mathematical functions, or import
              and execute G-Code files, the Precision Plotter is engineered to
              handle these tasks with ease.
            </p>
            <h3>Components</h3>
            <p>
              The following components were used in the design of the plotter:
            </p>
            <ul>
              <li>Raspberry Pi 4 (RP4)</li>
              <li>Stepper Motors</li>
              <li>Rotary Encoders</li>
            </ul>
            <p>To see demonstration videos, click <a href="https://www.youtube.com/watch?v=Q5JhgT3V5Lg&list=PL-ZNuBf7N98oXJAFyI3xNzuR_te0wGc8-&index=5" target="_blank">Here</a></p>
          </>
        );
        break;
      case Projects.Platformer:
        this.projectTitle = "JS Platformer";
        this.imgHead = "./platformer.png";
        this.toolsUsed = [Tools.JavaScript, Tools.HTML, Tools.CSS];
        this.ghLink = "https://github.com/nathangpark/platformer-js";
        this.date = "November 2022";
        this.description = (
          <>
            <h1>{this.projectTitle}</h1>
            <p>{this.date}</p>
            <h3>Description</h3>
            <p>Simple platformer made entirely from scratch with JavaScript and HTML/CSS.</p>
            <ul>
              <li>Built 2D physics engine (collisions, gravity, friction)</li>
              <li>Built 2D animation engine (cycling through sprites)</li>
              <li>Incorprated constraints: (The game must incorporate a genie)</li>
              <li>Scrolling and styled introduction and ending text screens.</li>
            </ul>
            <h3>Play the game!</h3>
            <p>
              Play the game <a href="https://nathangpark.github.io/platformer-js/" target="_blank">HERE</a>
              , or, to start from the game section, click <a href="https://nathangpark.github.io/platformer-js/platformer.html" target="_blank">HERE</a>
              </p>
          </>
        );
        break;
      default:
        this.projectTitle = project;
        this.imgHead = "";
        this.toolsUsed = [];
        this.ghLink = "";
        this.date = "";
        this.description = <></>;
    }
  }

  public getProjectTitle() {
    return this.projectTitle;
  }

  public getProjectImg() {
    return this.imgHead;
  }

  public getToolsUsed() {
    return this.toolsUsed;
  }

  public getGHLink() {
    return this.ghLink;
  }

  public getDescription() {
    return this.description;
  }

  public getDate(){
    return this.date;
  }
}
