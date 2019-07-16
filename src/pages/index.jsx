import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import { Layout } from "../components/Layout";
import { Tile } from "../components/Tile";

const Index = () => (
  <StaticQuery
    query={graphql`
      query PostsQuery {
        allContentfulPost(sort: { order: DESC, fields: date }) {
          edges {
            node {
              id
              date(formatString: "DD.MM.YYYY")
              photo {
                resize(height: 800, quality: 80) {
                  src
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            align-content: flex-start;
            overflow-y: scroll;
            height: 100vh;
            padding: 5px;

            @media (max-width: 1024px) {
              height: auto;
              overflow-y: auto;
            }
          `}
        >
          {data.allContentfulPost.edges.map(edge => (
            <Tile post={edge.node} key={edge.node.id} />
          ))}
        </div>
      </Layout>
    )}
  />
);

export default Index;
