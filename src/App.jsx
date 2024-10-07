import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routesConfig from "./utils/routesConfig";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              exact
              path={route?.path}
              element={route?.element}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
