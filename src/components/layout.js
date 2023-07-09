import React from "react"

import { StaticImage } from 'gatsby-plugin-image'

import Sidebar from "./sidebar"
import Topbar from "./topbar"
import Leaves_topright from "./leaves_topright"
// layout of page components that will always stay the same between pages

/*
      <div                    
        style={{ // force layout to start in top left corner
        position: "absolute",
        left: 0,
        top: 0,
        }}>
      
*/

export default function Layout() {
  return (
<div>
    <div style={{ // force layout to start in top left corner
        position: "absolute",
        left: 0,
        top: 0,
        }}><Sidebar></Sidebar></div>
    <div style={{ // force layout to start in top left corner
        position: "absolute",
        left: 0,
        top: 0,
        }}><Topbar></Topbar></div>
      <div style={{ // force layout to start in top left corner
        position: "absolute",
        right: 0,
        top: 0,
        width: 350, 
        height: 350
        }}><StaticImage
        alt="Hanging leaves (topright)"
        src="../images/leaves.png"
        objectFit="scale-down"
      /></div>

</div>
  )
}