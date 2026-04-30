import { createRoot, Root } from "react-dom/client";
import App from "./App";

declare global {
  interface Window {
    __REACT_APP_ROOT__?: Root;
  }
}

function mount() {
  const container = document.getElementById("root");
  if (!container) return;

  if (!window.__REACT_APP_ROOT__) {
    window.__REACT_APP_ROOT__ = createRoot(container);
  }
  window.__REACT_APP_ROOT__.render(<App />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
