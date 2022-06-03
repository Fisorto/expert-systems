import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import {codeForDogs} from '../base-knowledge/DogArchive'

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
        codeForDogs.alergic = anwer;
        // console.log(codeForDogs)
        
    };

    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>9.Чи є у вас алергія на собак ?</h2></div>
                <div className="answer-area">
                    {alergicAnswerArray.map((prop)=>{
                        return(
                        <div key={prop.id}>
                            <input id={prop.id} name="first_question" type="radio"  onClick={()=>idChanger(prop.code)}/>
                            <label htmlFor={prop.id}>{prop.value}</label>
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
                        <Link to="/eighth" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button" >
                    {flag ? <Link to="/tenth" onClick={()=>setAnswer(id)}>
                            <button>Вперед</button>
                        </Link> : null}
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default TenthPage;