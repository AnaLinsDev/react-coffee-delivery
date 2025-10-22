import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { IconContext } from "@phosphor-icons/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IconContext.Provider
      value={{
        color: "#82e557",
        size: 24,
        weight: "bold"
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IconContext.Provider>
  </StrictMode>
);
