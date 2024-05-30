import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Containers and Components ----------------------------------------
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ModeToggle";
import Sidebar from "./components/Sidebar";
import Timer from "./components/Timer";
// ------------------------------------------------------------------

// Styles -----------------------------------------------------------
import "./App.scss";
// ------------------------------------------------------------------

// * CONSTANTS ------------------------------------------------------
const COMPONENT_PATHS = [
  { label: "Timer", path: "/timer", element: () => <Timer /> },
];
// * ----------------------------------------------------------------

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="app">
        <div className="app-theme-toggle">
          <ModeToggle />
        </div>
        <Router>
          <div className="learning-stuff-sidebar-wrapper">
            <Sidebar componentPaths={COMPONENT_PATHS} />
          </div>

          <div className="learning-stuff-main-content-wrapper">
            <Routes>
              {COMPONENT_PATHS.map((componentPath) => {
                return (
                  <Route
                    key={componentPath.path}
                    path={componentPath.path}
                    element={componentPath.element()}
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
