import React from "react";

import Layout from "../layout";
import SEO from "../components/seo";
import Home from "../components/Home/Home";

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Home />
  </Layout>
);

export default IndexPage;
