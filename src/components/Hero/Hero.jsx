import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lucas</h1>
        <p className={styles.description}>
        I am a systems student who works on projects in various frontend and backend languages, specializing in NestJS and Flutter. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:2021460003@unheval.pe" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="lucsducks"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
