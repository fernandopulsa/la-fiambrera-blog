import React from "react";
import PropTypes from "prop-types";
//import { kebabCase } from 'lodash'
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  linkaudio,
  title,
  helmet,
  date,
  cover
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="episode_detail_wrapper">
      {helmet || ""}
      <div className="">
        <div className="">
          <div className="">
            <div className="cover_wrapper">
              <Img
                fluid={{
                  ...cover.childImageSharp.fluid,
                  aspectRatio: 1 / 1
                }}
              />
            </div>
            <h1 className="title color_corpo">{title}</h1>
            <p className="date">{date}</p>
            <PostContent content={content} className="description" />
            <div className="audio_wrapper">
              <audio src={linkaudio} controls />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  linkaudio: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.any,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        linkaudio={post.frontmatter.linkaudio}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        cover={post.frontmatter.cover}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        description
        linkaudio
        cover {
          childImageSharp {
            fluid(maxWidth: 700) {
              src
            }
          }
        }
      }
    }
  }
`;
