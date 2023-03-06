import styled from "styled-components/macro";

import Board from "./Board";

export default function Game() {
  return (
    <Wrapper>
      <Board />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
`;
