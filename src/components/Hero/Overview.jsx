import TextExpander from "../TextExpander/textExpander";

import styles from "./Overview.module.css";

function Overview({ children }) {
  // Includes overview and using a custom textexpander function to shorten the text
  return (
    <div className={styles.summary}>
      <span className={styles.overview}>Overview:</span>
      <TextExpander
        collapsedNumWords={15}
        expandButtonText="more"
        collapseButtonText="less"
        buttonColor="#3b82f6"
        expanded={false}
        className={styles.btnExpand}
      >
        {children}
      </TextExpander>
    </div>
  );
}

export default Overview;
