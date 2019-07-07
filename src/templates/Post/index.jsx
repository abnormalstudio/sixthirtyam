import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Layout } from "../../components/Layout";
import { useLazy } from "../../utils";

const ProjectLink = styled(Link)`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background-color: #313131;
  font-weight: bolder;
  font-size: 20px;
  padding: 15px;
  display: inline-block;
  transition: all 1s ease;

  &:hover {
    color: #fff;
    background-color: #de356a;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
  }
`;

const Post = props => {
  const { post, next, prev } = props.pathContext;
  const { imageSrc, setRef } = useLazy(
    post.photo.resize.base64,
    post.photo.resize.src
  );
  const description = post.description
    ? post.description.childMarkdownRemark.excerpt
    : `Outfit ${post.date}`;

  return (
    <Layout>
      <Helmet title={post.date}>
        <meta name="description" content={description} />
        <meta name="twitter:card" value={`Outfit ${post.date}`} />
        <meta property="og:title" content={`Outfit ${post.date}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.sixthirtyam.com/" />
        <meta property="og:image" content={post.photo.resize.src} />
        <meta property="og:description" content={description} />
      </Helmet>

      <div
        css={css`
          display: flex;
          flex-direction: row-reverse;

          @media (max-width: 1024px) {
            flex-wrap: wrap;
          }
        `}
      >
        <div
          css={css`
            width: 50%;

            @media (max-width: 1024px) {
              width: 100%;
              position: relative;
            }
          `}
        >
          <div
            css={css`
              text-align: right;
              position: absolute;
              right: 0px;
              top: 0px;
              @media (max-width: 1024px) {
                text-align: center;
              }
            `}
          >
            {prev && <ProjectLink to={prev}>&#8592;</ProjectLink>}
            {next && <ProjectLink to={next}>&#8594;</ProjectLink>}
          </div>

          <img
            css={css`
              width: 100%;
              height: 100vh;
              object-fit: cover;

              @media (max-width: 1024px) {
                height: auto;
                object-fit: contain;
                margin-bottom: -2px;
              }
            `}
            src={imageSrc}
            ref={setRef}
            alt={post.date}
          />
        </div>

        <div
          css={css`
            width: 50%;
            background-color: ${post.panelColor || "#afbec5"};
            position: relative;
            box-shadow: 0 0px 2px rgba(0, 0, 0, 0.16),
              0 5px 2px rgba(0, 0, 0, 0.1);

            @media (max-width: 1024px) {
              width: 100%;
              box-shadow: none;
            }
          `}
        >
          <h2
            css={css`
              font-size: 1.2rem;
              position: absolute;
              top: 50vh;
              transform: translateY(-0.6rem);
              left: 2rem;

              @media (max-width: 1024px) {
                position: static;
                margin: 1rem 0px 1rem 1rem;
                transform: none;
              }
            `}
          >
            {post.date}
          </h2>

          {post.description && (
            <div
              css={css`
                padding: 2rem;
                position: absolute;
                top: 50vh;

                @media (max-width: 1024px) {
                  padding: 0px;
                  margin: 1rem 0px 1rem 1rem;
                  position: static;
                }
              `}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html
                }}
              />
            </div>
          )}

          {post.tags && (
            <ul
              css={css`
                display: flex;
                flex-wrap: wrap;
                margin: 2rem 2rem;
                font-size: 0.8rem;
                position: absolute;
                bottom: 0px;

                @media (max-width: 1024px) {
                  margin: 1rem 0px 1rem 1rem;
                  position: static;
                }
              `}
            >
              {post.tags.map(tag => (
                <li
                  css={css`
                    padding: 0.5rem;
                    margin-top: 0.5rem;
                    margin-right: 0.5rem;
                    border: 1px solid white;
                    background: white;
                    border-radius: 2px;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16),
                      0 1px 2px rgba(0, 0, 0, 0.23);
                  `}
                  key={tag}
                >
                  <Link to={`/tag/${tag}`}>#{tag}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
