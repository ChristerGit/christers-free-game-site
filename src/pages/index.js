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
        left: "15vw",
        top: "25vh",
        paddingLeft: 0,
        fontSize: 16, 
        color: "gray"
        }}>
          <h2>You have trekked through the jungle and come upon... Christers Free Game Site! Below this text you will find
            the top rated games on the site along with a random selection 
          </h2>
        </div>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage