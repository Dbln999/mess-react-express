import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const routes = useRoutes();

  return (
    <div className="App bg-dark">
      <Router>{routes}</Router>
    </div>
  );
}

export default App;
