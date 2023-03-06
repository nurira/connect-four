import styled from "styled-components/macro";

import Text from "./Text";

export default function RuleCard() {
  return (
    <Wrapper>
      <Heading>Rules</Heading>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  background: var(--color-white);
  border: var(--border);
  border-color: var(--color-black);
  border-radius: 40px;
  padding: 20px;

  height: 586px;
  width: 335px;
`;

const Heading = styled(Text).attrs((props) => ({
  forwardedAs: "h1",
  size: "lg",
}))`
  text-align: center;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
`;
