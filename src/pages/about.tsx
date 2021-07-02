import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import About from "../components/About/About";
import SEO from "../components/seo";
const config = require("../../data/SiteConfig");

function AboutPage() {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

      <About />
    </Layout>
  );
}

export default AboutPage;
