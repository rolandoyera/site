import React, { useState } from 'react'
import './toggle.css'





export default function Toggle() {
  const [content, setContent] = useState(false);
  const toggleContent = () => setContent(!content);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button style={{ maxWidth: "160px", border: "none", padding: "1rem" }} onClick={toggleContent}>Toggle Me</button>

      <div style={{ height: '100px', marginTop: '20px' }} >
        <div className={content ? 'content theFirstStyle' : 'theSecondStyle'}>
          This is a CSS toggle targeted element.
        </div>
      </div>

    </div>
  )
}
