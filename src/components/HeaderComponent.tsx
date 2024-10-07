import { MouseEvent, useState } from "react";

export enum Headers {
  Home = "Homes",
  AboutMe = "About Me",
  Projects = "Projects",
  Contact = "Contact",
}

interface Props {
  onSelectItem: (item: Headers) => void;
}

const HeaderComponent = ({ onSelectItem }: Props) => {
  let [selectedIndex, setSelectedIndex] = useState(0);

  let items = [
    Headers.Home,
    Headers.Projects,
    Headers.AboutMe,
    Headers.Contact,
  ];

  const handleClick = (item: Headers, index: number) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <div className="header">
      {items.map((item, index) => (
        <div
          className={
            "header-list-item" +
            (index === selectedIndex ? " selected-header-list-item" : "")
          }
          key={index}
          onClick={() => handleClick(item, index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HeaderComponent;
