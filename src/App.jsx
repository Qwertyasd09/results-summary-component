import "./App.css";
import { Result } from "./components/Result";
import { Summary } from "./components/Summary";
import { Wrapper } from "./components/Wrapper";
import { scores } from "./data/data";

export const App = () => {
  return (
    <Wrapper>
      <Result scores={scores} />
      <Summary scores={scores} />
    </Wrapper>
  );
};
