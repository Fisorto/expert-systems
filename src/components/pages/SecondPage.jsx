import { Link } from 'react-router-dom';
import { useState } from 'react';
import './pages-styles/PagesStyles.scss';


import {codeForDogs} from '../base-knowledge/DogArchive'


const timeAnswerArray = [
    {   
        id : "a2",
        code: "a",
        value: "Півгодини на день"      
    },
    {   
        id : "b2",
        code: "b",
        value: "Година на день"      
    },
    {
        id : "c2",
        code: "c",
        value: "Від години до двох годин на день"      
    },
    {
        id : "d2",
        code: "d",
        value: "Більше двох годин на день"      
    },
]

function SecondPage() {
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
        codeForDogs.time = anwer;
        // console.log(codeForDogs)
        
    };


    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area">
                    <h2>
                        2.Скільки часу ви готові гуляти із собакою?
                    </h2>
                </div>
                <div className="answer-area">
                {timeAnswerArray.map((prop)=>{
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
                        <Link to="/first" onClick={()=>setAnswer("")} >
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button">
                    {flag ? <Link to="/third" onClick={()=>setAnswer(id)} >
                            <button>Вперед</button>
                        </Link> : null}
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default SecondPage;