import {
  createBrowserRouter,
  createHashRouter,
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
  // const routes = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return(
    <RouterProvider router={routes} />
  )
}

export default App;
