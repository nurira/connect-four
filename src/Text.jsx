import styled from "styled-components/macro";

export default function Text({ size = "md", children }) {
  const SIZES = {
    lg: TextLG,
    md: TextMD,
    sm: TextSM,
    xs: TextXS,
  };
  const Tag = SIZES[size] ? SIZES[size] : TextMedium;

  return <Tag>{children}</Tag>;
}

const TextLG = styled.span`
  font-size: ${56 / 16}rem;
  line-height: ${71 / 16}rem;
  font-weight: var(--font-weight-bold);
`;

const TextMD = styled.span`
  font-size: ${24 / 16}rem;
  line-height: ${31 / 16}rem;
  font-weight: var(--font-weight-bold);
`;

const TextSM = styled.span`
  font-size: ${20 / 16}rem;
  line-height: ${26 / 16}rem;
`;

const TextXS = styled.span`
  font-size: ${16 / 16}rem;
  line-height: ${21 / 16}rem;
`;
