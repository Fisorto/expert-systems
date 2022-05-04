import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import { codeForDogs } from './FirstPage';

const goalAnswerArray = [
    {   
        id : "a5",
        code: "a",
        value: "Для охорони"      
    },
    {
        id : "b5",
        code: "b",
        value: "Для людини з вадами зору"      
    },
    {
        id : "c5",
        code: "c",
        value: "Просто як домашня тварина"      
    },
]

function FifthPage() {
    const [id, setId] = useState('');
    
    function idChanger(i){
        if(id.length < 1){
            setId(id + i)
        } else {
            setId(i)
        }   
    }

    function setAnswer(anwer){
        codeForDogs.goal = anwer;
        console.log(codeForDogs)
        
    };
    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area">
                    <h2>
                        5.Для яких цілей, ви хочите собаку ?
                    </h2>
                </div>
                <div className="answer-area">
                {goalAnswerArray.map((prop)=>{
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
                        <Link to="/fourth" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button">
                        <Link to="/sixth" onClick={()=>setAnswer(id)}>
                            <button>Вперед</button>
                        </Link>
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default FifthPage;