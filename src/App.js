import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
// import Navbar from "./component/Navbar/Navbar";
import Layout from "./component/Layout";
import Contact from "./component/Contact";
import Home from "./component/Home";
import About from "./component/About";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/react-router-exercise/" element = {<Layout />}>
      <Route path="/react-router-exercise/" element={<Home />} />
      <Route path="/react-router-exercise/contact" element={<Contact />} />
      <Route path="/react-router-exercise/about" element={<About />} />
    </Route>
  )
);

function App() {
  return(
    <RouterProvider router={routes} />
  )
}

export default App;
