"use client";

import { Icon } from "@iconify/react";
import styles from "./index.module.scss";
import Router from "next/router";
const AboutButton = () => {
  const handler = () => {
    Router.push("/about");
  };
  return (
    <>
      <div>
        <button className={styles.detail} onClick={handler}>
          <Icon
            icon="material-symbols:arrow-right-alt-rounded"
            height="32px"
            color="#dddddd"
          />
        </button>
      </div>
    </>
  );
};
export default AboutButton;
