import { graphql, useStaticQuery } from "gatsby"

import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const IndexPage = () => {
  const Metadata = useStaticQuery(graphql`
    query metadata {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Template GatsbyJS"
        description={Metadata.site.siteMetadata.description}
      />
      <h1>Home</h1>
    </Layout>
  )
}

export default IndexPage
