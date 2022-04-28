import { Link } from 'react-router-dom';
import './pages-styles/PagesStyles.scss';



function FirstPage() {
    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>Тут повинно бути питання</h2></div>
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
                        <a href="../"><button>Головна</button></a>
                    </div>
                    <div className="button-button"><button>Назад</button></div>
                    <div className="button-button"><button>Вперед</button></div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default FirstPage;