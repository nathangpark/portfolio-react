export enum Tools {
  React = "react",
  TypeScriptX = "tsx",
  Python = "python",
  LaTeX = "latex",
  Vite = "vite",
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "javascript",
  Java = "Java"
}

interface Props {
  tool: Tools
}

const srcReact = "./react.svg";
const srcTSX = "Typescript_logo_2020.svg";
const srcVite = "./vite.svg";
const srcPy = "./python-logo-only.svg";
const srcHTML = "./HTML5_logo_and_wordmark.svg";
const srcCSS = "./CSS3_logo_and_wordmark.svg";
const srcJS = "./JavaScript-logo.png"
const srcJava = "./Java_programming_language_logo.svg"
const srcTex = "";

const ToolsComponent = ({ tool }:Props) => {
  let src;
  switch (tool){
    case Tools.React:
      src = srcReact;
      break;
    case Tools.TypeScriptX:
      src = srcTSX;
      break;
    case Tools.Python:
      src = srcPy;
      break;
    case Tools.LaTeX:
      src = srcTex;
      break;
    case Tools.Vite:
      src = srcVite;
      break;
    case Tools.HTML:
      src = srcHTML;
      break;
    case Tools.CSS:
      src = srcCSS;
      break;
    case Tools.JavaScript:
      src = srcJS;
      break;    
    case Tools.Java:
      src = srcJava;
      break;  
    default:
      src = "";        
  }

 let className= "tool-image";
 className += tool == Tools.React ? + " react-image" : ""

  return (
    <img className={className} src={src} alt={tool}/>
  )
}

export default ToolsComponent;