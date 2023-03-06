import styled from "styled-components/macro";

export default function Logo({ size = 40 }) {
  return (
    <Wrapper
      style={{ "--size": size + "px" }}
      src="./assets/logo.svg"
      alt="Logo"
    />
  );
}

const Wrapper = styled.img`
  height: var(--size);
  width: var(--size);
`;
