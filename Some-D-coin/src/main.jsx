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
import Contributors from "./components/Contributors/Contributors.jsx";
import Wallet from "./components/Wallet/Wallet.jsx";
import IssueDetails from "./components/GitHubIssues/IssueDetails/IssueDetails.jsx";
import Leaderboard from "./components/LeaderBoard/LeaderBoard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path='shop' element={<GitHubIssues/>} />{
         <Route path='shop/issue' element={<IssueDetails/>} />
      }
      <Route path='leaderboard' element={<Leaderboard/>} />
      <Route path='about' element={<About/>} />
      <Route path='history' element={<Transaction/>} />
      <Route path='contributors' element={<Contributors/>} />
      <Route path='wallet' element={<Wallet/>} />
      <Route path="team" element={<Team />} />
     
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sora:wght@100..800&display=swap"
      rel="stylesheet"
    ></link>
    <RouterProvider router={router} />
  </StrictMode>
);
