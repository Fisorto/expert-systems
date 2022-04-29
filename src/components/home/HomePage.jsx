import { Link } from 'react-router-dom';
import './HomePage.scss';



function HomePage() {
    return (
      <section className='home-section'>
            <div className="greeting-area">
                <div className="greeting-text">
                    <h1>
                        Ласкаво просимо до застосунку вибору породи собаки.
                    </h1>
                </div>
                <div className="greeting-propose-text">
                    <h2>
                        Натисніть кнопку, щоб розпочати.
                    </h2>
                </div>
                <div className="greeting-button">
                    <Link to="/first">
                        <button>Розпочати</button>
                    </Link>
                    
                </div>
            </div>
      </section>
    );
  }
  
  export default HomePage;