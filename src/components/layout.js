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
    <div style={{ // site text on top
        position: "absolute",
        left: 0,
        top: -40,
        paddingLeft: 200,
        fontSize: 36, 
        color: "whitesmoke"
        }}>
          <h1>Christers Free Game Site</h1>
        </div>

      <div style={{ // leaves hanging over the top (rightmost)
        position: "absolute",
        right: 0,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves (topright)"
        src="../images/JungleVine_07.png"
        objectFit="scale-down"/>
      </div>
      <div style={{ // leaves hanging over the top 2
        position: "absolute",
        right: 200,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves 2"
        src="../images/JungleVine_06.png"
        objectFit="scale-down"/>
      </div>
      <div style={{ // leaves hanging over the top 3
        position: "absolute",
        right: 400,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves 3"
        src="../images/JungleVine_02.png"
        objectFit="scale-down"/>
      </div>
      <div style={{ // leaves hanging over the top 4
        position: "absolute",
        right: 600,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves 4"
        src="../images/JungleVine_07.png"
        objectFit="scale-down"/>
      </div>
      <div style={{ // leaves hanging over the top 5
        position: "absolute",
        right: 800,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves 5"
        src="../images/JungleVine_06.png"
        objectFit="scale-down"/>
      </div>
      <div style={{ // leaves hanging over the top 6
        position: "absolute",
        right: 1000,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves 6"
        src="../images/JungleVine_02.png"
        objectFit="scale-down"/>
      </div>
      <div style={{ // leaves hanging over the top 7
        position: "absolute",
        right: 1200,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves 7"
        src="../images/JungleVine_07.png"
        objectFit="scale-down"/>
      </div>
      <div style={{ // leaves hanging over the top 8
        position: "absolute",
        right: 1400,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves 8"
        src="../images/JungleVine_06.png"
        objectFit="scale-down"/>
      </div>
      <div style={{ // leaves hanging over the top 9
        position: "absolute",
        right: 1600,
        top: 0,
        width: 200, 
        height: 200
        }}><StaticImage
        alt="Hanging leaves 9"
        src="../images/JungleVine_02.png"
        objectFit="scale-down"/>
      </div>


</div>
  )
}