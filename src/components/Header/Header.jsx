import "./Header.css"
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

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
        <Link to="#current-prices"spy={true} smooth={true} offset={50} duration={500} className={isActiveLink("#current-prices") ? "active" : ""}>CURRENT PRICES</Link>
        <Link to="#wallets"spy={true} smooth={true} offset={50} duration={500} className={isActiveLink("#wallets") ? "active" : ""}>WALLETS</Link>
        <Link to="#bockchain"spy={true} smooth={true} offset={50} duration={500} className={isActiveLink("#blockchain") ? "active" : ""}>BLOCKCHAIN</Link>
        <Link to="#meme"spy={true} smooth={true} offset={50} duration={500} className={isActiveLink("#meme") ? "active" : ""}>MEME</Link>
      </nav>

      <div className="action-section">
        <a href="#new-account">NEW ACCOUNT</a>
        <a href="#sign-in">SIGN IN</a>
      </div>

   </header>
  )
}

export default Header
