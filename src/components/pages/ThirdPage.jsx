import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import {codeForDogs} from '../base-knowledge/DogArchive'


const experienceAnswerArray = [
    {   
        id : "a3",
        code: "a",
        value: "Ні, це моя перша собака"      
    },
    {   
        id : "b3",
        code: "b",
        value: "В мене є досвід долгяду за собакою"      
    },
    {
        id : "c3",
        code: "c",
        value: "В мене великий досвід догляду за собакою"      
    },
]


function ThirdPage() {

    const [id, setId] = useState('');
    function idChanger(i){
        if(id.length < 1){
            setId(id + i)
        } else {
            setId(i)
        }   
    }

    function setAnswer(anwer){
        codeForDogs.experience = anwer;
        console.log(codeForDogs)
        
    };


    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>3.Чи є у вас досвід догляду за собакою ?</h2></div>
                <div className="answer-area">
                    {experienceAnswerArray.map((prop)=>{
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
                        <Link to="/second" onClick={()=>setAnswer("")} >
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button" onClick={()=>setAnswer(id)} >
                        <Link to="/fourth">
                            <button>Вперед</button>
                        </Link>
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default ThirdPage;