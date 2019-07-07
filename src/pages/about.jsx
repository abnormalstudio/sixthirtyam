import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import { css } from "@emotion/core";
import { Container, Heading } from "../styles";

const About = () => (
  <StaticQuery
    query={graphql`
      query SnippetQuery {
        contentfulSnippet(name: { eq: "About" }) {
          id
          name
          content {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Container>
          <Heading>{data.contentfulSnippet.name}</Heading>
          <div
            css={css`
              p {
                padding: 1rem;
              }
            `}
            dangerouslySetInnerHTML={{
              __html: data.contentfulSnippet.content.childMarkdownRemark.html
            }}
          />
        </Container>
      </Layout>
    )}
  />
);

export default About;
