import React from "react";
import styles from "./ProfileCard.module.css";

export default function ProfileCard({ name, role, bio, avatar }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <div>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.role}>{role}</h3>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}
