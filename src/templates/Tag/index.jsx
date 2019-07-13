import React from "react";
import Helmet from "react-helmet";
import { css } from "@emotion/core";
import { Layout } from "../../components/Layout";
import { Tile } from "../../components/Tile";

const Tag = ({ pathContext }) => {
  const { tag, posts } = pathContext;
  return (
    <Layout>
      <Helmet title={`#${tag}`} />
      <h2
        css={css`
          font-size: 2rem;
          margin: 0.5rem;
          margin-top: 1.5rem;
        `}
      >
        #{tag}
      </h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          align-content: flex-start;
          overflow-y: scroll;
          height: 100vh;
          padding: 0.25rem;

          @media (max-width: 1024px) {
            height: auto;
            overflow-y: auto;
          }
        `}
      >
        {posts.map(post => (
          <Tile post={post} key={post.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Tag;
