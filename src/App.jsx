import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSpeechSynthesis } from "react-speech-kit";
import {
  Container,
  Segment,
  Header,
  Button,
  Icon,
  Image,
} from "semantic-ui-react";

function App() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();

  const handleClick = () => {
    speak({ text: value });
  };
  return (
    <>
      <Container>
        <Segment>
          <h1>Text to speech demo</h1>
          <textarea
            className="textAreaStyle"
            name=""
            id=""
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></textarea>
          <button
            className="buttonStyle"
            onClick={() => {
              handleClick();
            }}
          >
            {" "}
            Text To Speech{" "}
          </button>
        </Segment>
      </Container>
    </>
  );
}

export default App;
