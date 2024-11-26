import React, { useState, useEffect } from "react";
import Router from "./Router";
import { GlobalStyle } from "./style/GlobalStyle";
import Onboarding from "./common/Onboarding";
import Menu from "./common/menu";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnboarding(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      {showOnboarding ? (
        <Onboarding />
      ) : (
        <div>
          <Router />
        </div>
      )}
    </>
  );
}

export default App;
