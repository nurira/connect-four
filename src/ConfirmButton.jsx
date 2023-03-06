import styled from "styled-components/macro";

export default function ConfirmButton({ ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <ConfirmIcon />
    </Wrapper>
  );
}

function ConfirmIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="75"
      viewBox="0 0 70 75"
    >
      <g fill="none" fillRule="evenodd" stroke="none">
        <g>
          <circle
            className="outline"
            cx="35"
            cy="35"
            r="35"
            fill="#000"
          ></circle>
          <circle
            className="shadow"
            cx="35"
            cy="40"
            r="35"
            fill="#000"
          ></circle>
          <circle cx="35" cy="35" r="32" fill="#FD6687"></circle>
          <path
            stroke="#FFF"
            strokeWidth="3"
            d="M20 34.5819497L30.2640104 44.84596 50.1099704 25"
          ></path>
        </g>
      </g>
    </svg>
  );
}

const Wrapper = styled.button`
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
