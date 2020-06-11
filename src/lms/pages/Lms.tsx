import React from "react";
import { StyleSheet, css } from "aphrodite";
import Container from "../../components/ui/Shared/Container";
import FlatCard from "../coptic/FlatCard";
import Colors from "../coptic/Colors";
import FontWeight from "../coptic/FontWeight";
import { FlexBox, FlexItem } from "../coptic/Flexbox";

function Lms(): JSX.Element {
  return (
    <Container style={styles.primaryContainer} type="normal">
      <FlatCard style={[styles.fadeIn, styles.content]}>
        <FlexBox direction="column">
          <FlexItem>
            <h1>Welcome to Coptic Surveys</h1>
            <input
              className={css(styles.input)}
              placeholder="How many 2s do we multiply to get 8?"
              type="text"
            />
            <button className={css(styles.button)}>Testing</button>
          </FlexItem>
        </FlexBox>
      </FlatCard>
    </Container>
  );
}

const fadeInKeyFrames = {
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
};

const styles = StyleSheet.create({
  fadeIn: {
    animationName: [fadeInKeyFrames],
    animationDuration: "3s, 1200ms",
  },
  primaryContainer: {
    marginTop: "5vh",
  },
  content: {
    padding: 10,
    width: 800,
    height: 700,
    backgroundColor: Colors.BabyPink,
  },
  input: {
    fontSize: 15,
    fontWeight: FontWeight.BOLD,
    padding: 10,
    border: `1px solid ${Colors.Gainsboro}`,
  },
  button: {
    fontWeight: FontWeight.TWO_HUNDRED,
    border: "none",
    padding: 10,
    color: Colors.White,
    backgroundColor: Colors.SpaceCadet,
  },
});

export default Lms;
