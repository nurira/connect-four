import styled from "styled-components/macro";

export default function Button({ type = "default", children }) {
  const BUTTONS = {
    default: BaseButton,
    primary: PrimaryButton,
    secondary: SecondaryButton,
    tertiary: TertiaryButton,
  };

  const Tag = BUTTONS[type] ? BUTTONS[type] : BaseButton;
  return <Tag>{children}</Tag>;
}

const BaseButton = styled.button`
  cursor: pointer;
  width: 100%;
  display: block;
  height: ${72 / 16}rem;
  border-radius: 20px;
  border: var(--border);
  font-size: var(--text-md);
  text-transform: uppercase;
  filter: var(--drop-shadow-black);
  background: var(--color-white);

  &:hover {
    filter: var(--drop-shadow-primary);
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: var(--color-primary);
`;

const SecondaryButton = styled(BaseButton)`
  background: var(--color-secondary);
`;

const TertiaryButton = styled(BaseButton)`
  background: var(--color-tertiary);
`;