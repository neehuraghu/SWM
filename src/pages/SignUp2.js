import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp2.module.css";
const SignUp2 = () => {
  const navigate = useNavigate();

  const onFrameIconClick = useCallback(() => {
    navigate("/main-page");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/sign-up-3");
  }, [navigate]);

  return (
    <div className={styles.signUp2}>
      <b className={styles.signUp}>Sign Up</b>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame.svg"
        onClick={onFrameIconClick}
      />
      <div className={styles.upload}>
        <div className={styles.uploadAProfile}>Upload a profile image.</div>
        <div className={styles.upload1}>
          <div className={styles.uploadChild} />
          <div className={styles.dragAndDropOrBrowceAFileParent}>
            <b className={styles.dragAndDropContainer}>
              <span className={styles.dragAndDropContainer1}>
                {`Drag and drop or `}
                <span className={styles.browce}>browce</span> a file
              </span>
            </b>
            <div className={styles.recommendedSizeJpg}>
              Recommended size: JPG, PNG, GIF (1500x1500px, Max 10mb)
            </div>
            <img className={styles.imageIcon} alt="" src="/image1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.enterYourDetails}>Enter your details</div>
      <div className={styles.textInput}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close12.svg" />
        </div>
        <div className={styles.content}>
          <img className={styles.tagIcon} alt="" src="/tag4.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Jessica Goh</div>
          </div>
        </div>
      </div>
      <div className={styles.textInput1}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close13.svg" />
        </div>
        <div className={styles.content1}>
          <img className={styles.tagIcon} alt="" src="/tag4.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>************</div>
          </div>
        </div>
      </div>
      <div className={styles.textInput2}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close13.svg" />
        </div>
        <div className={styles.content1}>
          <img className={styles.tagIcon} alt="" src="/tag4.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>************</div>
          </div>
        </div>
      </div>
      <div className={styles.email}>
        <div className={styles.enterYourEmail}>Enter your email</div>
        <div className={styles.textInput3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.icon3}>
            <img className={styles.closeIcon} alt="" src="/close14.svg" />
          </div>
          <div className={styles.content3}>
            <img className={styles.tagIcon} alt="" src="/tag5.svg" />
            <div className={styles.text}>
              <div className={styles.enterYourName}>Enter your name</div>
              <div className={styles.firstName}>jessicalgoh@nftforlife.com</div>
            </div>
          </div>
          <div className={styles.heresAHint}>
            Add your email address to receive notifications about your activity
            on Foundation. This will not be shown on your profile.
          </div>
        </div>
      </div>
      <div className={styles.bio}>
        <div className={styles.enterYourBio}>Enter your bio</div>
        <div className={styles.form}>
          <div className={styles.typeHere}>
            Hi I’m Jessica, a freelance artist and participated in major art
            projects locally! Feel free to follow me on my socials!
          </div>
          <img className={styles.formChild} alt="" src="/group-13.svg" />
        </div>
      </div>
      <div className={styles.addLinksTo}>Add links to your social media</div>
      <div className={styles.textInput4}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close15.svg" />
        </div>
        <div className={styles.content4}>
          <img className={styles.closeIcon} alt="" src="/link1.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Website</div>
          </div>
        </div>
      </div>
      <div className={styles.nextParent} onClick={onGroupContainer1Click}>
        <b className={styles.next}>Next</b>
        <img className={styles.image26Icon} alt="" src="/image-261@2x.png" />
      </div>
      <div className={styles.hiImJessica}>
        Hi I’m Jessica, a freelance artist and participated in major art
        projects locally! Feel free to follow me on my socials!
      </div>
      <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
    </div>
  );
};

export default SignUp2;
