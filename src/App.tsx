import { BrowserRouter as Router } from "react-router-dom";

import { useState } from "react";
import { MenuOpened } from "./animations/MenuOpen/MenuOpened";
import { NavBar } from "./components/Menu/NavBar";
import { MainPage } from "./Pages/MainPage";

export function App() {
  const [isOverlay, setIsOverlay] = useState(false);
  return (
    <Router>
      <NavBar
        closingOnBlur={() => setIsOverlay((isOverlay) => !isOverlay)}
        menuChanges={
          <MenuOpened
            onClick={() => setIsOverlay((isOverlay) => !isOverlay)}
            isClose={isOverlay}
          />
        }
      />
      <MainPage overlay={isOverlay} />
    </Router>
  );
}
