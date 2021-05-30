import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import Nav from "../components/Nav/Nav";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <link rel="stylesheet" href="https://use.typekit.net/bjb4rdi.css" />
      </Helmet>

      <Nav />
      {children}
    </div>
  );
}
