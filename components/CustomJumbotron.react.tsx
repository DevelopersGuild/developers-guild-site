import React from "react";
import Image from "next/image";
import { Jumbotron } from "react-bootstrap";
import styles from "../styles/modules/CustomJumbotron.module.css";

const CustomJumbotron = () => (
  <Jumbotron>
    <div className={styles["jumbotron-container"]}>
      <Image src="/assets/icons/logo.svg" height={150} width={150} alt="Logo" />
      <div className="mt-4">
        <h1>Developers Guild - De Anza</h1>
        <p>A project and contribution based programming club.</p>
        <p>
          Fridays 1:30PM-4:00PM{" "}
          <span>
            <strong className={styles["jumbotron-time-span"]}>AT311</strong>
          </span>
          <strong> Discord & Zoom</strong>
        </p>
      </div>
    </div>
  </Jumbotron>
);

export default CustomJumbotron;
