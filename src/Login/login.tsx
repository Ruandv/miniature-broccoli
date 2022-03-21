import React from "react";
import styles from "./login.module.scss";

function Login() {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>Welcome</header>
      <p className={`${styles.row} ${styles.login}`}>
        <label>UserName</label>
        <input type="text" />

        <label>Password</label>
        <input type="password" />
        <p className={styles.footer}>
        <div className={`${styles.btn} ${styles["btn-primary"]}`}>Register</div>
          <div className={`${styles.btn} ${styles["btn-primary"]}`}>Ok</div>
        </p>
      </p>
      <footer></footer>
    </div>
  );
}

export default Login;
