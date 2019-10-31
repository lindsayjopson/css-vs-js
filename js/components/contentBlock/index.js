import * as React from "react";
import styled from "styled-components";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  padding: 20px;
`;

export const ContentBlock = () => (
  <ContentWrap>
    <h3>Content Heading</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet
      scelerisque elit. In hac habitasse platea dictumst. Cras faucibus neque
      vel enim imperdiet, sit amet tempus ligula accumsan. Nam vestibulum, neque
      sollicitudin vestibulum fermentum, tellus est laoreet tellus, quis egestas
      tellus ligula in nunc. Nam quis libero eleifend, pretium velit ac,
      facilisis lectus.
    </p>
  </ContentWrap>
);
