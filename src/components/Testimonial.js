import React from "react";
import styles from "./Testimonial.module.css";

const Testimonial = ({ name, message, avatar }) => {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <p className={styles.message}>"{message}"</p>
      <h4 className={styles.name}>{name}</h4>
    </div>
  );
};

export default Testimonial;
