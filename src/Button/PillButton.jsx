import styled from "styled-components/macro";

export function PillButton({ children, ...delegated }) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  cursor: pointer;
  width: ${114 / 16}rem;
  height: ${45 / 16}rem;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  background: var(--color-primary);
  color: var(--color-white);

  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active,
  &:focus {
    background: var(--color-secondary);
  }
`;
