import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log("TCL: IndexPage -> render -> data", data);
    const { edges: posts } = data.allMarkdownRemark;
    // const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="podcast_wrapper">
          <div className="">
            {posts.map(({ node: post }) => (
              <div className="podcast_wrapper_item" key={post.id}>
                <div className="cover_wrapper">
                  <Img
                    fluid={{
                      ...post.frontmatter.cover.childImageSharp.fluid,
                      aspectRatio: 1 / 1
                    }}
                    // imgStyle={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="info_wrapper">
                  <p className="title">
                    <Link className="color_corpo" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <p className="date">{post.frontmatter.date}</p>
                  <p className="description">{post.excerpt}</p>
                  <div className="audio_wrapper">
                    <audio src={post.frontmatter.linkaudio} controls />
                  </div>
                  <p className="view_more_btn">
                    <Link className="" to={post.fields.slug}>
                      Ver notas del programa
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
            cover {
              childImageSharp {
                fluid(maxWidth: 700) {
                  src
                }
              }
            }
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;
