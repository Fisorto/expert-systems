import './ResultPage.scss';



function ResultPage() {
    return (
      <section className='home-section'>
            <div className="result-page">
              <div className="result-area">
                <h2>Ваш результат, це ось такий песик:</h2>
                <span colot="red">Назва песика та його картинка</span>
              </div>
              <div className="back-to-home">
                <a href="../">
                    <button>Головна</button>
                </a>
              </div>
            </div>
      </section>
    );
  }
  
  export default ResultPage;