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
import config from "../../data/SiteConfig";
import Nav from "./Nav/Nav";
import "@fontsource/roboto";
// import Navbar from "./navBar";

const Layout = ({ children }) => (
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
          {/* <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row> */}
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
            <link rel="stylesheet" href="https://use.typekit.net/bjb4rdi.css" />
          </Helmet>
          <Nav />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
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
        </Container>
      </>
    )}
  />
);

export default Layout;
