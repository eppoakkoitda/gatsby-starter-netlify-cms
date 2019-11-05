---
templateKey: blog-post
title: ブログページに前後のリンクをつくる
date: 2019-11-05T10:50:00.000Z
description: Netlifly CMS テンプレートにより作成したGatsbyJS製のブログページに前後記事のリンクを追加する方法になります。
featuredpost: false
featuredimage: /img/noimage.svg
tags:
  - Gatsby
  - Netlify
---
今回はブログページの下部に前後のブログ記事のリンクをつくりたいと思います。
記事の一覧ページはBlogRoll.jsに実装されていたのでそれを参考にします。

# blog-post.js の編集

---

queryにBlogRoll.jsのqueryをコピペして追加します。

```
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
```

<br>データの取得部分を以下のように追記

```
const BlogPost = ({ data }) => {
  ...
  const { allMarkdownRemark: AMR } = data

  return (
    <Layout>
      <BlogPostTemplate
        ...
        id={post.id}
        amr={AMR}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    ...
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
```
