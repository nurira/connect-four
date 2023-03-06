import styled from "styled-components/macro";

import RuleCard from "./RuleCard";
import StartMenu from "./StartMenu";

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRules = () => {
    setIsPlaying(true);
  };

  return isPlaying ? (
    <RuleCard onClick={handlePlay} />
  ) : (
    <StartMenu onPlayGame={handlePlay} onShowRules={handleRules} />
  );
}
