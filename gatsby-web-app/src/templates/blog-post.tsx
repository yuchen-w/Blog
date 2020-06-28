import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import { BlogLayout } from "../components/BlogLayout"
import { BlogContent } from "../components/BlogContent"
import { Button, Typography, Divider } from "antd"
const { Title, Paragraph, Text } = Typography

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  console.log(post)
  return (
    <BlogLayout>
      <BlogContent breadcrumb={[post.frontmatter.title]}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <Title>{post.frontmatter.title}</Title>
        <Paragraph ellipsis>{post.frontmatter.date}</Paragraph>
        <Paragraph>
          <Text>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
          </Text>
        </Paragraph>

        {/* <Divider style={{}} />

        
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <Button type="link">← {previous.frontmatter.title}</Button>
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  <Button type="link">{next.frontmatter.title} →</Button>
                </Link>
              )}
            </li>
          </ul> */}
      </BlogContent>
    </BlogLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
