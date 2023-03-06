import styled from "styled-components/macro";
import { BREAKPOINTS } from "./GlobalStyles";

import Text from "./Text";

export default function RuleCard({ onClick }) {
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
          <Rule>
            <span>Red goes first in the first game.</span>
          </Rule>
          <Rule>
            <span>
              Players must alternate turns, and only one disc can be dropped in
              each turn.
            </span>
          </Rule>
          <Rule>
            <span>
              The game ends when there is a 4-in-a-row or a stalemate.
            </span>
          </Rule>
          <Rule>
            <span>
              The starter of the previous game goes second on the next game.
            </span>
          </Rule>
        </RuleList>
      </div>
      <ConfirmButton onClick={onClick}>
        {/* <img src="./assets/icon-check.svg" alt="check mark button" /> */}
        <svg
          width="70px"
          height="75px"
          viewBox="0 0 70 75"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>icon-check</title>
          <g
            id="Designs"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="icon-check">
              <circle
                className="outline"
                id="Oval-Copy-37"
                fill="#000000"
                cx="35"
                cy="35"
                r="35"
              ></circle>
              <circle
                className="shadow"
                id="Oval-Copy-38"
                fill="#000000"
                cx="35"
                cy="40"
                r="35"
              ></circle>
              <circle
                id="Oval-Copy-39"
                fill="#FD6687"
                cx="35"
                cy="35"
                r="32"
              ></circle>
              <polyline
                id="Path"
                stroke="#FFFFFF"
                stroke-width="3"
                points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
              ></polyline>
            </g>
          </g>
        </svg>
      </ConfirmButton>
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

const ConfirmButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  filter: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 64px;
  }

  &:hover,
  &:focus,
  &:active {
    .outline,
    .shadow {
      fill: var(--color-primary-light);
    }
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
