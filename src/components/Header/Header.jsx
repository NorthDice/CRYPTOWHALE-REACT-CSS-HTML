import "./Header.css"
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isActiveLink = (path) => location.hash === path;

    return (
   <header className="header">
      <div className="logo-section">
        <a href="#crypto-whale" className="logo">
          <img
            src={"https://cdn-icons-png.flaticon.com/128/6001/6001527.png"}
            alt="crypto-while"
          />
        </a>
        <p>CRYPTOWHALE</p>
      </div>    

      <nav className="nav-bar">
        <a href="#current-prices" className={isActiveLink("#current-prices") ? "active" : ""}>CURRENT PRICES</a>
        <a href="#wallets" className={isActiveLink("#wallets") ? "active" : ""}>WALLETS</a>
        <a href="#most-popular" className={isActiveLink("#most-popular") ? "active" : ""}>MOST POPULAR</a>
        <a href="#blockchain" className={isActiveLink("#blockchain") ? "active" : ""}>BLOCKCHAIN</a>
        <a href="#meme" className={isActiveLink("#meme") ? "active" : ""}>MEME</a>
      </nav>

      <div className="action-section">
        <a href="#new-account">NEW ACCOUNT</a>
        <a href="#sign-in">SIGN IN</a>
      </div>

   </header>
  )
}

export default Header
