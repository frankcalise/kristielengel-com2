/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Container, Row, Col } from "react-bootstrap";

import { Helmet } from "react-helmet";
import Nav from "./Nav/Nav";
import "@fontsource/roboto";
const config = require("../../data/SiteConfig");

type PageInfo = {
  pageName: string;
};

type Props = {
  pageInfo: PageInfo;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
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
    render={() => (
      <>
        <Container fluid className="px-0 main">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
            <link rel="stylesheet" href="https://use.typekit.net/bjb4rdi.css" />
          </Helmet>
          <Nav />
          <main>{children}</main>
          <Row noGutters>
            <Col>
              <Container></Container>
            </Col>
          </Row>
        </Container>
        {/* <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container> */}
      </>
    )}
  />
);

export default Layout;
