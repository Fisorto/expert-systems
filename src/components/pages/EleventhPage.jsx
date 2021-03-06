import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import {codeForDogs} from '../base-knowledge/DogArchive'

const otherAnimalAnswerArray = [
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


function TwelfthPage() {
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
        codeForDogs.otherAnimal = anwer;
        // console.log(codeForDogs)
        
    };

    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>11.Чи повинна собака ладити із іншими тваринами ?</h2></div>
                <div className="answer-area">
                    {otherAnimalAnswerArray.map((prop)=>{
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
                        <Link to="/tenth" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button" >
                    {flag ? <Link to="/result" onClick={()=>setAnswer(id)}>
                            <button>Вперед</button>
                        </Link> : null}
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default TwelfthPage;