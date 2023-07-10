import * as React from 'react'

import Layout from "../components/layout"

import Game_box from "../components/game_box"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
        <Layout>
        </Layout>
        <div style={{ // position a game box
        position: "absolute",
        left: "15vw",
        top: "25vh",
        }}>
          <Game_box linkTo="../../public/static/game_test_1/index.html" target="_blank"></Game_box>
        </div>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage