import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import { NavMenu } from "./components/navMenu";
import { BannerImage } from "./components/bannerImage";
import { ContentBlock } from "./components/contentBlock";
import { GlobalStyle } from "./styles/globalStyle";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <NavMenu />
      <BannerImage />
      <ContentWrapper>
        <ContentBlock />
        <ContentBlock />
        <ContentBlock />
      </ContentWrapper>
    </Container>
  </>
);

render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
