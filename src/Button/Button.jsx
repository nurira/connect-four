import styled from "styled-components/macro";

function Button({ type = "default", children, ...delegated }, ref) {
  const BUTTONS = {
    default: BaseButton,
    primary: PrimaryButton,
    secondary: SecondaryButton,
    tertiary: TertiaryButton,
  };

  const Tag = BUTTONS[type] ? BUTTONS[type] : BaseButton;
  return (
    <Tag ref={ref} {...delegated}>
      {children}
    </Tag>
  );
}

const BaseButton = styled.button`
  cursor: pointer;
  width: 100%;
  display: block;
  height: ${78 / 16}rem;
  border-radius: 20px;
  border: var(--border);
  border-color: var(--color-black);
  text-transform: uppercase;
  filter: var(--drop-shadow-black);
  background: var(--color-white);
  color: var(--color-black);
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover,
  &:active,
  &:focus {
    filter: var(--drop-shadow-primary);
    border-color: var(--color-primary);
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

export default React.forwardRef(Button);
