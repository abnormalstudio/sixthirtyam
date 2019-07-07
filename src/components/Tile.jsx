import Link from "gatsby-link";
import React from "react";
import { css } from "@emotion/core";
import { slugify, useLazy } from "../utils";

const Tile = ({ post }) => {
  const { imageSrc, setRef } = useLazy(
    post.photo.resize.base64,
    post.photo.resize.src
  );

  return (
    <div
      css={css`
        cursor: pointer;
        width: 33.33%;

        @media (max-width: 1024px) {
          width: 50%;
        }
        @media (max-width: 600px) {
          width: 100%;
        }
      `}
    >
      <Link
        to={`/outfit/${slugify(post.date)}`}
        css={css`
          display: block;
          padding: 0.25rem;
        `}
      >
        <img
          css={css`
            width: 100%;
          `}
          ref={setRef}
          src={imageSrc}
          alt={post.date}
        />
      </Link>
    </div>
  );
};

export { Tile };
