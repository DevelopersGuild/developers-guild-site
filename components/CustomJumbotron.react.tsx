import React from "react";
import Image from "next/image";
import { css, StyleSheet } from "aphrodite";
import { Jumbotron } from "react-bootstrap";

const CustomJumbotron = () => (
  <Jumbotron>
    <div className={css(styles.jumboContainer)}>
      <Image src="/assets/icons/logo.svg" height={150} width={150} alt="Logo" />
      <div className="mt-4">
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
  jumboContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    flexWrap: "wrap",
  },
});

export default CustomJumbotron;
