import React from "react"

import Sidebar_bg from './sidebar_bg'

import { Link } from 'gatsby'

  export default function Sidebar() {
    return (
      <>
        <Sidebar_bg></Sidebar_bg>
        <div style={{ // local site header
        position: "absolute",
        left: "1vw",
        top: "30vh",
        fontSize: 18, 
        color: "white", 
        width: "50vw"
        }}>
              <li>
            <Link to="/" activeStyle={{ color: "red" }}>Top rated games</Link>
            </li>
            <li>
            <Link to="/browser_games" activeStyle={{ color: "red" }}>Browser games</Link>
            </li>
            <li>
            <Link to="/downloadable_games" activeStyle={{ color: "red" }}>Downloadable games</Link>
            </li>
            <li>
            <Link to="/android_games" activeStyle={{ color: "red" }}>Android games</Link>
            </li>
            <li>
            <Link to="/steam_games" activeStyle={{ color: "red" }}>Games on Steam</Link>
            </li>
            <li>
            <Link to="/donations" activeStyle={{ color: "red" }}>Donations</Link>
            </li>
        </div>
      </>
    );
  }