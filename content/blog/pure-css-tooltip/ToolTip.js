import React from "react"
import * as styles from './tooltip.module.css'

const ToolTip = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <button className={styles.btn} tooltip="Tooltip up here!" flow="up">Up</button>
          <button className={styles.btn} tooltip="Tooltip down way over here!"
            flow="down">Down</button>
          <button className={styles.btn} tooltip="This one is a lefty with a really long sentence!"
            flow="left">Left</button>
          <button className={styles.btn} tooltip="Tooltip right"
            flow="right">Right</button>
        </div>
      </div>
    </div>
  )
}

export default ToolTip
