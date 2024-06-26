import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const aboutImageRef = useRef(null);

  useEffect(() => {
    const aboutImage = aboutImageRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutImage.classList.add(styles.visible);
          } else {
            aboutImage.classList.remove(styles.visible);
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    if (aboutImage) {
      observer.observe(aboutImage);
    }

    return () => {
      if (aboutImage) {
        observer.unobserve(aboutImage);
      }
    };
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          ref={aboutImageRef}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer specializing in creating responsive,
                high-performance websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing efficient and optimized back-end
                systems and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3>
              <p>
                I have strong experience in designing and managing relational
                and non-relational databases to support scalable applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
