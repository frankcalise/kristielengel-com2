import React from "react";

import Layout from "../layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
    <p>Woops, looks like you got a little lost.</p>
  </Layout>
);

export default NotFoundPage;
