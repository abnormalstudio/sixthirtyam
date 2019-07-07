import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import { css } from "@emotion/core";
import { Container, Heading } from "../styles";
import { useLazy } from "../utils";

const AboutImage = ({ file }) => {
  const { imageSrc, setRef } = useLazy(file.resize.tracedSVG, file.resize.src);
  return (
    <div
      css={css`
        text-align: center;
        padding: 0 1rem;
      `}
    >
      <img
        src={imageSrc}
        ref={setRef}
        alt="Marian and Leigh"
        css={css`
          max-width: 100%;
        `}
      />
    </div>
  );
};

const About = () => (
  <StaticQuery
    query={graphql`
      query SnippetQuery {
        file(name: { eq: "marian-leigh-wedding" }) {
          id
          childImageSharp {
            resize(width: 800, quality: 80) {
              src
              tracedSVG
            }
          }
        }
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
              max-width: 800px;
              margin: 0 auto;

              p {
                padding: 1rem;
              }
            `}
            dangerouslySetInnerHTML={{
              __html: data.contentfulSnippet.content.childMarkdownRemark.html
            }}
          />
          <AboutImage file={data.file.childImageSharp} />
        </Container>
      </Layout>
    )}
  />
);

export default About;
