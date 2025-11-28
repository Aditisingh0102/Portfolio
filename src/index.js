import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Compute a safe basename for BrowserRouter. When deploying to a subpath (GitHub Pages),
// process.env.PUBLIC_URL may be an absolute URL or a path. We want the pathname only.
const PUBLIC_URL = process.env.PUBLIC_URL || '/';
let basename = PUBLIC_URL;
try {
  // 'new URL' will normalize both absolute URLs and relative paths when a base is provided.
  const maybe = new URL(PUBLIC_URL, window.location.origin);
  basename = maybe.pathname.replace(/\/$/, ''); // remove trailing slash
  if (!basename) basename = '/';
} catch (e) {
  // fallback — keep PUBLIC_URL as-is
  basename = PUBLIC_URL;
}

root.render(
  <BrowserRouter basename={basename}>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
