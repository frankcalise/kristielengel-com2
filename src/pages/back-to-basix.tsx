import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import SEO from "../components/seo";
const config = require("../../data/SiteConfig");

function BackToBasics() {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
      <p>back to basix</p>
    </Layout>
  );
}

export default BackToBasics;
