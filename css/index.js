import * as React from "react";
import { render } from "react-dom";
import { NavMenu } from "./components/navMenu";
import { BannerImage } from "./components/bannerImage";
import { ContentBlock } from "./components/contentBlock";

const App = () => (
  <div className="container">
    <NavMenu />
    <BannerImage />
    <div className="content_wrapper">
      <ContentBlock />
      <ContentBlock />
      <ContentBlock />
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
