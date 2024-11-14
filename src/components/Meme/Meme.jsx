import React from 'react'
import Title from '../Title/Title'
import {meme} from '../../assets/meme'
import "./Meme.css"

const Meme = () => {
  return (
    <div className="meme-wrapper" id="#meme">
        <Title
          title="The growth leader of the cycle MEME"
          className="title"
        />
        <div className="meme-grid">
            {
              meme.map(item => (
                <div key={item.id} className="item">
                    <h2>{item.title}</h2>
                    <img
                      src={item.img}
                    />
                    <p>{item.description}</p>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Meme
