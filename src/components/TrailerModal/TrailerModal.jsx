import Button from "../Button/Button";
import styles from "./TrailerModal.module.css";
function TrailerModal({ title, movieKey, className, onClick }) {
  return (
    <div className={`${styles.player} ${className}`}>
      <Button onClick={onClick} className={styles.closeTrailer}>
        Close
      </Button>
      <iframe
        width="80%"
        height="80%"
        loading="lazy"
        src={`https://www.youtube.com/embed/${movieKey}`}
        title={title}
        allowFullScreen
        allow="clipboard-write; encrypted-media; picture-in-picture"
      />
    </div>
  );
}

export default TrailerModal;
