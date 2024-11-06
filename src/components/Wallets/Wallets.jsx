import Title from '../Title/Title'
import { wallets } from '../../assets/wallets';
import './Wallets.css';

const Wallets = () => {
  return (
    <div className="wallets-wrapper">
      <Title title="Protect your assets with crypto WALLETS" />
      <div className="wallets-grid">
        {wallets.map((wallet) => (
          <div key={wallet.id} className="wallet-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={wallet.img} className="card-img" alt={`${wallet.name} logo`} />
              </div>
              <div className="card-back">
              <p>{wallet.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallets;

