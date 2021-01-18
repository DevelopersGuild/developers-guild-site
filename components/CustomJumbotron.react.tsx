import React from "react";
import { css, StyleSheet } from "aphrodite";
import { Jumbotron } from "react-bootstrap";

const CustomJumbotron = () => (
  <Jumbotron>
    <div className={css(styles.jumboContainer)}>
      <img
        src="assets/logo.svg"
        className={css(styles.jumboImage)}
        alt="Logo"
      />
      <div>
        <h1>Developers Guild - De Anza</h1>
        <p>A project and contribution based programming club.</p>
        <p>
          Fridays 1:30PM-4:00PM{" "}
          <span className={css(styles.strikeThrough)}>AT311</span>
          <strong> Discord & Zoom</strong>
        </p>
      </div>
    </div>
  </Jumbotron>
);

const styles = StyleSheet.create({
  strikeThrough: {
    textDecoration: "line-through",
  },
  jumboImage: {
    marginRight: 20,
    width: "150px",
    height: "150px",
  },
  jumboContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
});

export default CustomJumbotron;
