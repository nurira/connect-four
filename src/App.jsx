import styled from "styled-components/macro";

import Game from "./Game";
import RuleCard from "./RuleCard";
import StartMenu from "./StartMenu";

import useToggle from "./hooks/useToggle";

export default function App() {
  const [isPlaying, togglePlaying] = useToggle(false);
  const [showRules, toggleRules] = useToggle(false);

  if (showRules) return <RuleCard onConfirm={toggleRules} />;
  if (isPlaying) return <Game />;

  return <StartMenu onPlayGame={togglePlaying} onShowRules={toggleRules} />;
}
