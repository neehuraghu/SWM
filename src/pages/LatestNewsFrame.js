import styles from "./LatestNewsFrame.module.css";
const LatestNewsFrame = ({ onClose }) => {
  return (
    <div className={styles.latestNewsFrame}>
      <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
      <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
    </div>
  );
};

export default LatestNewsFrame;
