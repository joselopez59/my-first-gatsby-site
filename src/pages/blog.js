import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ({ data }) => {

  console.log('data', data)
  return (
    <Layout pageTitle="My Blog Posts">
      
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={ node.name }>
            { node.name }
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`
console.log('query', query)
export default BlogPage
