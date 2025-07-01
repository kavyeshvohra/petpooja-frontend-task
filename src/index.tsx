import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OutletHomepage } from "./screens/OutletHomepage/OutletHomepage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <OutletHomepage />
  </StrictMode>,
);
