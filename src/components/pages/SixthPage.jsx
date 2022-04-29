import { Link } from 'react-router-dom';
import './pages-styles/PagesStyles.scss';


function SixthPage() {
    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>Тут повинно бути питання 6</h2></div>
                <div className="answer-area">
                    <input id="a1" name="first_question" type="radio" value="1"/>
                    <label for="a1">Відповідь 1</label>
                    <input id="b1" name="first_question" type="radio" value="2"/>
                    <label for="b1">Відповідь 2</label>
                    <input id="c1" name="first_question" type="radio" value="3"/>
                    <label for="c1">Відповідь 3</label>
                </div>

                <div className="button-area">
                    <div className="button-button">
                        <a href="../">
                            <button>Головна</button>
                        </a>
                    </div>
                    <div className="button-button">
                        <Link to="/fifth">
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button">
                        <Link to="/seventh">
                            <button>Вперед</button>
                        </Link>
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default SixthPage;