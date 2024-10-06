import "./App.css";
import Home from "./pages/Home/Home";
import Topbar from "./components/Topbar/Topbar";
import Single from "./pages/Single/Single";

function App() {
  return (
    <div>
      <Topbar />
      {/* <Home/> */}
      <Single/>
    </div>
  );
}

export default App;
