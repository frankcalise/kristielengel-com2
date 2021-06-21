import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav/Nav";
import "./index.css";

const config = require("../../data/SiteConfig");

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
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
};

export default MainLayout;
