import React, { useState } from 'react'
import './toggle.css'

import { Button } from 'theme-ui'



export default function Toggle() {
  const [content, setContent] = useState(false);
  const toggleContent = () => setContent(!content);

  return (
    <div style={{ marginTop: "12px", display: "flex", flexDirection: "column" }}>
      <Button style={{ maxWidth: "160px" }} className="btn btn-primary" onClick={toggleContent}>Toggle Me</Button>

      <div style={{ height: '100px', marginTop: '20px' }} >
        <div className={content ? 'content theFirstStyle' : 'theSecondStyle'}>
          This is a CSS toggle targeted element.
        </div>
      </div>

    </div>
  )
}
