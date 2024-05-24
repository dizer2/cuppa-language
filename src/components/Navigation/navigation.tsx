import React from "react";

// navigation elements array
const navigationElements = [
  { id: 0, title: "Uvod", href: "/uvod" },
  { id: 1, title: "Kurzy", href: "/kurzy" },
  { id: 2, title: "Náš tým", href: "/tym" },
  { id: 3, title: "Přihláška", href: "/prihlaska" },
  { id: 4, title: "Kontakty", href: "/contacts" },
];

// INavigationProps
interface INavigationProps {
  displayNavigation: boolean;
  setDisplayNavigation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FunctionComponent<INavigationProps> = ({ displayNavigation, setDisplayNavigation }) => {
  return (
    <nav className="navigation" style={{ top: displayNavigation ? "0" : "-100%" }}>
      <ul className="navigation__list">
        {navigationElements.map((element) => (
          <li key={element.id} className="navigation__item">
            <a href={element.href} className="navigation__link">
              {element.title}
            </a>
          </li>
        ))}
      </ul>

      {/* cross button */}
      <button className="cross-btn" onClick={() => setDisplayNavigation(false)}>
        <span className="cross-btn__line"></span>
        <span className="cross-btn__line"></span>
      </button>
    </nav>
  );
}

export default Navigation;