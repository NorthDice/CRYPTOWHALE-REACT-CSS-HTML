import React from 'react'
import Title from '../Title/Title'
import "./Blockchain.css"
import { blockchain } from '../../assets/blockchain';

const Blockchain = () => {
  return (
    <div className="blockchain-wrapper">
      <Title
        title="What is BLOCKCHAIN"      
      />
        <div className="chain-grid">
        {blockchain.map(item => (
            <div key={item.id} className="item">
              <h2>{item.title}</h2>
              <img
                src={item.img || ""}
              />
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Blockchain
