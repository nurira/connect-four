import styled from "styled-components/macro";
import { BREAKPOINTS } from "../GlobalStyles";

export default function Piece({ color = "red" }) {
  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="auto"
      viewBox="0 0 41 46"
    >
      <defs>
        <circle id="path-1" cx="19.976" cy="19.976" r="16.976"></circle>
        <filter
          id="filter-2"
          width="114.7%"
          height="114.7%"
          x="-7.4%"
          y="-7.4%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dy="5"
            in="SourceAlpha"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-231 -744)">
          <g transform="translate(211 160)">
            <g transform="translate(20.976 584.976)">
              <circle cx="20" cy="20" r="20" fill="#000"></circle>
              <circle cx="20" cy="25" r="20" fill="#000"></circle>
              <g>
                <use
                  fill={color === "red" ? "#FD6687" : "#FFCE67"}
                  xlinkHref="#path-1"
                ></use>
                <use
                  fill="#000"
                  filter="url(#filter-2)"
                  xlinkHref="#path-1"
                ></use>
              </g>
            </g>
          </g>
        </g>
      </g>
    </Wrapper>
  );
}

const Wrapper = styled.svg`
  width: 41px;

  @media ${BREAKPOINTS.tablet} {
    width: 78px;
  }
`;
