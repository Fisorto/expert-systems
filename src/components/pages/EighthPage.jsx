import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import {codeForDogs} from '../base-knowledge/DogArchive'

const volumeAnswerArray = [
    {   
        id : "a8",
        code: "a",
        value: "Тиха"      
    },
    {   
        id : "b8",
        code: "b",
        value: "Cередня по гучності"      
    },
    {
        id : "c8",
        code: "c",
        value: "Гучна"      
    },
]

function EighthPage() {
    const [id, setId] = useState('');
    const [flag, setFlag] = useState(false)
    
    function idChanger(i){
        if(id.length < 1){
            setId(id + i)
            setFlag(true)
        } else {
            setId(i)
        }   
    }

    function setAnswer(anwer){
        codeForDogs.volume = anwer;
        /* console.log(codeForDogs) */
        
    };
    
    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>8. Наскільки гучною повинна бути собака</h2></div>
                <div className="answer-area">
                    {volumeAnswerArray.map((prop)=>{
                        return(
                        <div key={prop.id}>
                            <input id={prop.id} name="first_question" type="radio"  onClick={()=>idChanger(prop.code)}/>
                            <label className='element-answer' htmlFor={prop.id}>{prop.value}</label>
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
                        <Link to="/seventh" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button" >
                    {flag ? <Link to="/ninth" onClick={()=>setAnswer(id)}>
                            <button>Вперед</button>
                        </Link> : null}
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default EighthPage;