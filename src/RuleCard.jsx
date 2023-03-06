import styled from "styled-components/macro";
import { BREAKPOINTS } from "./GlobalStyles";

import Text from "./Text";
import { ConfirmButton } from "./Button";

const RULES = [
  `Red goes first in the first game.`,
  `Players must alternate turns, and only one disc can be dropped in
  each turn.`,
  `The game ends when there is a 4-in-a-row or a stalemate.`,
  `The starter of the previous game goes second on the next game.`,
];

export default function RuleCard({ onConfirm }) {
  return (
    <Wrapper>
      <div>
        <Heading>Rules</Heading>
      </div>
      <div>
        <Subheading>Objective</Subheading>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
      </div>
      <div>
        <Subheading>How to Play</Subheading>
        <RuleList>
          {RULES.map((r, idx) => (
            <Rule key={idx}>
              <span>{r}</span>
            </Rule>
          ))}
        </RuleList>
      </div>
      <ConfirmButton onClick={onConfirm} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;

  width: 100%;
  height: 100%;
  padding: 30px 20px;
  border: var(--border);
  border-color: var(--color-black);
  border-radius: 40px;
  background: var(--color-white);
  /* filter: var(--drop-shadow-black); */
  box-shadow: 0px 10px 0px 0px black;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  height: 586px;
  width: 341px;

  @media ${BREAKPOINTS.tablet} {
    width: 486px;
    padding-inline: 34px;
  }
`;

const Heading = styled(Text).attrs((props) => ({
  forwardedAs: "h1",
  size: "lg",
}))`
  text-align: center;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
`;

const Subheading = styled(Text).attrs((props) => ({
  forwardedAs: "h2",
  size: "sm",
}))`
  text-align: left;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  color: var(--color-primary-light);
  padding: 16px 0;
`;

const RuleList = styled.ol`
  list-style: decimal inside;
  counter-reset: nums;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Rule = styled.li`
  padding-left: 1.6rem;
  text-indent: -1.6rem;
  counter-increment: nums;

  &::marker {
    font-weight: var(--font-weight-bold);
    color: var(--color-black);
    content: counter(nums);
  }

  span {
    margin-left: 1rem;
  }
`;
