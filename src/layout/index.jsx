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
        <link
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Nav />
      {children}
    </div>
  );
}
