import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { SideBar } from "../SideBar";

import "./generic/reset.css";
import "./generic/index.css";

const Main = styled.main`
  width: 75%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          overflow-y: hidden;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          align-content: flex-start;

          @media (max-width: 1024px) {
            overflow-y: scroll;
          }
        `}
      >
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Abhaya+Libre|Noto+Serif+SC:200&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <SideBar />
        <Main>{props.children}</Main>
      </div>
    )}
  />
);

export { Layout };
