import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn1.module.css";
const LogIn1 = () => {
  const navigate = useNavigate();

  const onFrameIconClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onTextInputContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextInputContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.logIn}>
      <b className={styles.logIn1}>Log In</b>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame.svg"
        onClick={onFrameIconClick}
      />
      <div className={styles.textInput} onClick={onTextInputContainerClick}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close8.svg" />
        </div>
        <div className={styles.content}>
          <img className={styles.tagIcon} alt="" src="/tag3.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Username</div>
          </div>
        </div>
      </div>
      <div className={styles.textInput1} onClick={onTextInputContainer1Click}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close9.svg" />
        </div>
        <div className={styles.content1}>
          <img className={styles.tagIcon} alt="" src="/tag3.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Password</div>
          </div>
        </div>
      </div>
      <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
    </div>
  );
};

export default LogIn1;
