import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
//import { RefCountDisposable } from 'rx-core'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  id,
  amr,
}) => {
  const PostContent = contentComponent || Content
  // const { edges: posts } = amr
  const posts = amr.edges
  console.log("amr:" + amr);
  console.log("edges:" + posts);
  // console.log("id: " + id);
  const myPost = posts.find((v) => v.node.id === id);
  console.log("myPost: " + myPost);
  const myIndex = posts.indexOf(myPost);
  // console.log(myIndex);
  const maxIndex = posts.length;
  

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {tags && tags.length ? (
              <div style={{ marginTop: `3rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <PostContent content={content} />
            <h1 />
            {<div width="100%">
              {myIndex>0 &&
                <Link className="button" to={posts[myIndex-1].node.fields.slug}>
                  ← 前の記事
                </Link>}
              {myIndex<maxIndex-1 &&
                <Link className="button" to={posts[myIndex+1].node.fields.slug}>
                  次の記事 →
                </Link>}
            </div>}
            
          </div>
        </div>
      </div>
    </section>
  )
  
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  posts: PropTypes.array,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const { allMarkdownRemark: AMR } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        id={post.id}
        amr={AMR}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
