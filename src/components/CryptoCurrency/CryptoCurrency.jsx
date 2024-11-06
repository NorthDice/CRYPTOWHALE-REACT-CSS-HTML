import React, { useContext, useEffect, useState } from 'react'
import "./CryptoCurrency.css"
import { CoinContext } from '../../context/CoinContext';
import CoinContextProvider from '../../context/CoinContext';


const CryptoCurrency = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value){
      case "usd" : {
        setCurrency({name:"usd", symbol: "$"});
        break;
      }
      case "eur" : {
        setCurrency({name:"eur", symbol: "€"});
        break;
      }
      case "inr" : {
        setCurrency({name:"inr", symbol: "r"});
        break;
      }
      default : {
        setCurrency({name:"usd", symbol: "$"});
        break;
      }
    }
  }

 const {allCoin, currency} = useContext(CoinContext);
 const [displayCoin, setDisplayCoin] = useState([]);

 useEffect (()=>{
   setDisplayCoin(allCoin);
 },[allCoin])
  
  return (    
    <div className="crypto-wrapper">
      <div className="most-popular">
        <p>The most popular cryptos</p>
      </div>
      <div className="crypto-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>24 % Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
          {displayCoin && displayCoin.length > 0 ? (
              displayCoin.slice(0, 8).map((item, index) => (
                <tr key={index}>
                  <td className="coin-cap">{item.market_cap_rank || "N/A"}</td>
                  <td>
                    <div className="coin-info">
                      <img className="crypto-img" src={item.image} alt={item.name} />
                      <span>{item.name} - {item.symbol}</span>
                    </div>
                  </td>
                  <td className="crypto-price">{currency.symbol} {item.current_price}</td>
                  <td className={item.price_change_percentage_24h >= 0 ? "positive-change" : "negative-change"}>
                    {item.price_change_percentage_24h}%</td>
                    <td className="crypto-cap">{currency.symbol} {item.market_cap.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Loading coins...</td>
              </tr>
            )}
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default CryptoCurrency
