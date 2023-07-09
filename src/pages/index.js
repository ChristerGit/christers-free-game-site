// Step 1: Import React
import * as React from 'react'

import Layout from "../components/layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
        <Layout>
        </Layout>
        <div style={{ // local site header
        position: "absolute",
        left: 250,
        top: 100,
        paddingLeft: 0,
        fontSize: 24, 
        color: "gray"
        }}>
          <h2>Welcome to Christers Free Game Site. Below this text you can find the top rated games on the site.</h2>
        </div>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage