import { SupportedLanguages } from "@atlaskit/code/supportedLanguages";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { SupportedLanguagesOption } from "../../data/runtime-types";
import { generateName } from "../../data/generate";
import { AkCodeBlock } from "@atlaskit/code";

import { StyleSheet, css } from "aphrodite";

function NewCodeBlock(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [option, setOption] = useState<SupportedLanguages>("javascript");
  const [name, setName] = useState<string>(generateName());
  const [stashedInput, setStashedInput] = useState<any>([]);

  async function handleSubmission(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    if (stashedInput.length >= 1) {
      // multiple snippets

      const payload = {
        content: [...stashedInput],
        language: option,
        name: name,
      };

      const mHeaders = new Headers();
      mHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(payload);
      try {
        fetch("https://utilapi-rqg4sqdiwq-uc.a.run.app/code", {
          method: "POST",
          headers: mHeaders,
          body: raw,
        })
          .then((response) => response.json())
          .then((parsed) => {
            window.location.replace(`/code/${parsed.hash}`);
          })
          .catch((err) => {
            console.error(err);
            window.location.replace("/");
          });
      } catch (error) {
        console.error(error);
        window.location.replace("/");
      }
    } else {
      alert("You don't have any snippets: cancelling operation");
    }
  }

  function handleNewSnippet(): void {
    setStashedInput([...stashedInput, input]);
    setInput("");
  }

  return (
    <Container>
      <h2>Share a Code Snippet!</h2>
      <Form onSubmit={handleSubmission}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e: any) => {
              setName((e.target as HTMLTextAreaElement).value);
            }}
            type="text"
            value={name}
          />
          <Form.Text className="text-muted">
            You can name your snippet but we have already generated a name for
            you.
          </Form.Text>
        </Form.Group>
        {/*  */}
        <Form.Group controlId="codeForm.CodeArea">
          <Form.Label>Code Snippet: {option}</Form.Label>
          <Button onClick={handleNewSnippet} variant="link">
            Add Snippet
          </Button>
          <Form.Control
            onChange={(e) => {
              setInput((e.target as HTMLTextAreaElement).value);
            }}
            as="textarea"
            rows="20"
            placeholder="Write Code Here"
            value={input}
          />
        </Form.Group>
        {stashedInput.map((y: string) => (
          <div key={y} className={css(styles.block)}>
            <AkCodeBlock language={option} text={y} />
          </div>
        ))}
        {/*  */}
        <Form.Group controlId="codeForm.LanguageArea">
          <Form.Label>Language</Form.Label>
          <Form.Control
            as="select"
            value={option}
            onChange={(e) => {
              const changed = (e.target as HTMLSelectElement).value;
              setOption(changed as SupportedLanguages);
            }}
          >
            {SupportedLanguagesOption.map((x) => (
              <option value={x} key={x}>
                {x}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({
  block: {
    marginTop: "1vh",
    marginBottom: "1vh",
  },
});
export default NewCodeBlock;
