import React from "react";
import Link from "gatsby-link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const SideBar = () => (
  <Aside>
    <Name>6:30 AM</Name>
    <p
      css={css`
        margin-top: 1rem;
        text-align: center;
        @media (max-width: 1024px) {
          margin-top: 0.5rem;
        }
      `}
    >
      Daily Outfits
    </p>
    <Navigation>
      <Navlist>
        <Listitem>
          <Navlink to="/">HOME</Navlink>
        </Listitem>
        <Listitem>
          <Navlink to="/about">ABOUT</Navlink>
        </Listitem>
        <Listitem>
          <Navlink to="/contact">CONTACT</Navlink>
        </Listitem>
      </Navlist>
    </Navigation>
  </Aside>
);

const Aside = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    position: relative;
  }
`;

const Name = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  color: #540e33;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);

  @media (max-width: 1024px) {
    padding-top: 1rem;
    font-size: 2.5rem;
  }
`;

const Navigation = styled.nav`
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const Navlist = styled.ul`
  display: flex;
`;

const Listitem = styled.li`
  padding: 0.5rem;
  list-style: none;

  @media (max-width: 1024px) {
    padding: 0.25rem 0.5rem;
  }
`;

const Navlink = styled(Link)`
  font-weight: bold;
  padding: 0.25rem;
  transition: all 0.5s ease;
`;

export { SideBar };
