import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import {codeForDogs} from '../base-knowledge/DogArchive'

const activityAnswerArray = [
    {   
        id : "a6",
        code: "a",
        value: "Неспішні"      
    },
    {   
        id : "b6",
        code: "b",
        value: "Середньої інтенсивності"      
    },
    {
        id : "c6",
        code: "c",
        value: "Активні"      
    },
]


function SixthPage() {

    const [id, setId] = useState('');
    
    function idChanger(i){
        if(id.length < 1){
            setId(id + i)
        } else {
            setId(i)
        }   
    }

    function setAnswer(anwer){
        codeForDogs.activity = anwer;
        console.log(codeForDogs)
        
    };
    
    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>6.На скільки активні прогулянки ви хочете? </h2></div>
                <div className="answer-area">
                {activityAnswerArray.map((prop)=>{
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
                        <Link to="/fifth" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button">
                        <Link to="/seventh" onClick={()=>setAnswer(id)}>
                            <button>Вперед</button>
                        </Link>
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default SixthPage;