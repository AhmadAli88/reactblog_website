import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Layout component with shared Header (Topbar)
const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div>{children}</div>
    </>
  );
};

// Define routes
const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/single",
    element: (
      <Layout>
        <Single />
      </Layout>
    ),
  },
  {
    path: "/write",
    element: (
      <Layout>
        <Write />
      </Layout>
    ),
  },
  {
    path: "/settings",
    element: (
      <Layout>
        <Settings />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
