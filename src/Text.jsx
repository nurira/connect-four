import styled from "styled-components/macro";

export default function Text({ size = "md", children, ...delegated }) {
  const SIZES = {
    lg: TextLG,
    md: TextMD,
    sm: TextSM,
    xs: TextXS,
  };

  const Tag = SIZES[size] ? SIZES[size] : TextMedium;
  return <Tag {...delegated}>{children}</Tag>;
}

const TextBase = styled.span`
  font-weight: var(--font-weight-bold);
`;

const TextLG = styled(TextBase)`
  font-size: ${56 / 16}rem;
  line-height: ${71 / 16}rem;
`;

const TextMD = styled(TextBase)`
  font-size: ${24 / 16}rem;
  line-height: ${31 / 16}rem;
`;

const TextSM = styled(TextBase)`
  font-size: ${20 / 16}rem;
  line-height: ${26 / 16}rem;
`;

const TextXS = styled(TextBase)`
  font-size: ${16 / 16}rem;
  line-height: ${21 / 16}rem;
`;
