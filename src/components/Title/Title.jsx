import React from 'react'
import "./Title.css"
const Title = ( { title = "TITLE" } ) => {
    
    const words = title.split(" ");
    const lastWord = words.pop(); 

    return (
    <div className="title-wrapper">
        <h1>
          {words.join(" ")}{" "}
          <span className="last-word">{lastWord}</span>
        </h1>
    </div>
  )
}

export default Title
