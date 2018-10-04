import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="podcast_wrapper">
          <div className="podcast_wrapper_item">
            {posts
              .map(({ node: post }) => (
                <div className="" key={post.id}>
                  <p>
                    <Link className="title color_corpo" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <p>
                   <small>{post.frontmatter.date}</small>
                  </p>
                  <p className="text">
                    {post.excerpt}
                  </p>
                  <div className="audio_wrapper">
                    <audio src={post.frontmatter.linkaudio} controls></audio>
                  </div>
                  <p className="view_more_btn">
                    <Link className="" to={post.fields.slug}>
                      Ver notas del programa
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            linkaudio
            templateKey
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
