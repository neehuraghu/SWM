import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp3.module.css";
const SignUp3 = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/tutorial-page");
  }, [navigate]);

  const onLoginButtonContainer1Click = useCallback(() => {
    navigate("/welcome-page");
  }, [navigate]);

  return (
    <div className={styles.signUp3}>
      <b className={styles.signUp}>Sign Up</b>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.youHaveSuccessfullyContainer}>
        <p className={styles.youHaveSuccessfully}>
          You have successfully signed up!
        </p>
        <p className={styles.youHaveSuccessfully}>&nbsp;</p>
        <p className={styles.youHaveSuccessfully}>
          Press the “Tutorial” button below if you need a guide on the platform.
        </p>
      </div>
      <div className={styles.loginButton} onClick={onLoginButtonContainerClick}>
        <div className={styles.loginButtonChild} />
        <div className={styles.tutorial}>Tutorial</div>
      </div>
      <div
        className={styles.loginButton1}
        onClick={onLoginButtonContainer1Click}
      >
        <div className={styles.loginButtonItem} />
        <div className={styles.mainPage}>Main Page</div>
      </div>
      <div className={styles.jessicaGoh}>Jessica Goh</div>
      <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
    </div>
  );
};

export default SignUp3;
