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
    background-color: #28cc75;
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

  const longerPost =
    post.description &&
    (post.description.childMarkdownRemark.wordCount.words >= 50 ||
      post.description.childMarkdownRemark.wordCount.paragraphs >= 5);

  const keywords =
    post.metaTags && post.metaTags.length > 0 ? post.metaTags : post.tags;

  return (
    <Layout>
      <Helmet title={post.date}>
        <meta name="author" content="Marian Serna" />
        <meta name="keywords" content={keywords.join(",")} />
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
                margin-bottom: -3px;
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
              top: ${longerPost ? "15vh" : "50vh"};
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
                top: ${longerPost ? "15vh" : "50vh"};

                @media (max-width: 1024px) {
                  padding: 0px;
                  margin: 1rem 0px 1rem 1rem;
                  position: static;
                }

                h1 {
                  margin-bottom: 1rem;
                  font-size: 1.5rem;
                }
              `}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html
                }}
              />
              {post.outfit && (
                <div
                  css={css`
                    color: white;
                    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
                  `}
                  dangerouslySetInnerHTML={{
                    __html: post.outfit.childMarkdownRemark.html
                  }}
                />
              )}
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
                    margin-top: 0.5rem;
                    margin-right: 0.5rem;
                  `}
                  key={tag}
                >
                  <Link
                    to={`/tag/${tag}`}
                    css={css`
                      display: block;
                      padding: 0.5rem;
                      background: white;
                      border-radius: 2px;
                      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16),
                        0 1px 2px rgba(0, 0, 0, 0.23);
                      transition: all 0.5s ease;

                      &:hover {
                        color: white;
                        background-color: #f54ea2;
                      }
                    `}
                  >
                    #{tag}
                  </Link>
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
