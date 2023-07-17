import React, { useState } from "react";
import styles from "./SeccionComm.module.css";

const SeccionComm = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };

  return (
    <div>
      {comments.map((text) => (
        <div className={styles.commentSection}>{text}</div>
      ))}

      <div className={styles.mainComment}>
        <div className={styles.commFlexblox}>
          <h1>Comment</h1>
          <textarea
            className={styles.inputBox}
            value={comment}
            onChange={onChangeHandler}
          />
          <button onClick={onClickHandler}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default SeccionComm;
