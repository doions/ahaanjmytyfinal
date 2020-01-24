import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi, Welcome to the ebook download page.</h1>
  <p>
  Here! I am presenting you a free ebook to all of you about internet safety for kids.
  the book has an interesting conversation with an internet bot and kids.
  Please enjoy the book and share your feedback on my website. the comment section will be active pretty soon.
  
  <br>
  
  <a href="https://manav.myty.in/myty-ebook.pdf">Download</a>
  </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
