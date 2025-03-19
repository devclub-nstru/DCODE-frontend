import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GitHubIssues from "../src/components/GitHubIssues/GitHubIssues.jsx";
import "./index.css";
import "aos/dist/aos.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Team from "./components/Team/Team.jsx";
import About from "./components/About/About.jsx";
import Transaction from "./components/Transaction/Transaction.jsx"
// import Contributors from "./components/Home/Contributors.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path='shop' element={<GitHubIssues/>} />
      <Route path="team" element={<Team />} />
      <Route path='about' element={<About/>} />
      <Route path='history' element={<Transaction/>} />
      {/* <Route path='contributors' element={<Contributors/>} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
