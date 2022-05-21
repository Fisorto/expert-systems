import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import {codeForDogs} from '../base-knowledge/DogArchive'


const trainingAnswerArray = [
    {   
        id : "a4",
        code: "a",
        value: "Базові навичики дресирування"      
    },
    {   
        id : "b4",
        code: "b",
        value: "Базові навички та додаткові часи дресирування"      
    },
    {
        id : "c4",
        code: "c",
        value: "Порода для якої потрібно багато часу для дресирування"      
    },
]

function FourthPage() {
    const [id, setId] = useState('');
    
    function idChanger(i){
        if(id.length < 1){
            setId(id + i)
        } else {
            setId(i)
        }   
    }

    function setAnswer(anwer){
        codeForDogs.training = anwer;
        console.log(codeForDogs)
        
    };

    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area">
                    <h2>
                        4.Cкільки ви плануєте дресирувати собаку ?
                    </h2>
                </div>
                <div className="answer-area">
                {trainingAnswerArray.map((prop)=>{
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
                        <Link to="/third" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button" onClick={()=>setAnswer(id)}>
                        <Link to="/fifth">
                            <button>Вперед</button>
                        </Link>
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default FourthPage;
  