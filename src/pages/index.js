import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi. I'm Ahaan!</h1>
          <Image />

    <p>Welcome to my new website</p>
    <p>I am a six-year-old boy studying at witty international school. I aspire to become an entrepreneur and a tech expert in the future. I enjoy watching peep and chirp animation, Ryan toy review, pink panther. My favourite activity is playing badminton, football and cricket with my friends.</p>
    <p>I live in Malad (West), Mumbai.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to Download Page for the book here!</Link>
  </Layout>
)

export default IndexPage
