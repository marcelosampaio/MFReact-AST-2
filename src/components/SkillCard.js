import React from "react";
import styles from "./SkillCard.module.css";

const SkillCard = ({ name, level }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>Nível: {level}</p>
    </div>
  );
};

export default SkillCard;
