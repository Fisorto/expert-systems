import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import { codeForDogs } from './FirstPage';

const alergicAnswerArray = [
    {   
        id : "a9",
        code: "a",
        value: "Так"      
    },
    {   
        id : "b9",
        code: "b",
        value: "Ні"      
    },
]


function TenthPage() {
    const [id, setId] = useState('');
    
    function idChanger(i){
        if(id.length < 1){
            setId(id + i)
        } else {
            setId(i)
        }   
    }

    function setAnswer(anwer){
        codeForDogs.alergic = anwer;
        console.log(codeForDogs)
        
    };

    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>10.Чи є у вас алегрія на собак ?</h2></div>
                <div className="answer-area">
                    {alergicAnswerArray.map((prop)=>{
                        return(
                        <div key={prop.id}>
                            <input id={prop.id} name="first_question" type="radio"  onClick={()=>idChanger(prop.code)}/>
                            <label >{prop.value}</label>
                        </div>
                        );
                    }
                    )}
                </div>

                <div className="button-area">
                    <div className="button-button">
                        <a href="../">
                            <button>Головна</button>
                        </a>
                    </div>
                    <div className="button-button">
                        <Link to="/ninth" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button" >
                        <Link to="/eleventh" onClick={()=>setAnswer(id)}>
                            <button>Вперед</button>
                        </Link>
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default TenthPage;