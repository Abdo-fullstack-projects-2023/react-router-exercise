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
    <Route path={`${process.env.PUBLIC_URL}/`} element = {<Layout />}>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
      <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
    </Route>
  )
);

function App() {
  return(
    <RouterProvider router={routes} />
  )
}

export default App;
