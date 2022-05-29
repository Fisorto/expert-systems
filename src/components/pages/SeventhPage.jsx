import { Link } from 'react-router-dom';
import { useState } from 'react';

import './pages-styles/PagesStyles.scss';

import {codeForDogs} from '../base-knowledge/DogArchive'

const woolAnswerArray = [
    {   
        id : "a7",
        code: "a",
        value: "Без шерсті"      
    },
    {   
        id : "b7",
        code: "b",
        value: "Коротка"      
    },
    {   
        id : "c7",
        code: "c",
        value: "Cередня"      
    },
    {
        id : "d7",
        code: "d",
        value: "Довга"      
    },
    /* {
        id : "e7",
        code: "e",
        value: "Кучерява"      
    }, */
]


function SeventhPage() {
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
        codeForDogs.wool = anwer;
        console.log(codeForDogs)
        
    };

    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area"><h2>7.Яка шерсть повинна бути у собаки?</h2></div>
                <div className="answer-area">
                    {woolAnswerArray.map((prop)=>{
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
                        <Link to="/sixth" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button" >
                    {flag ?<Link to="/eighth" onClick={()=>setAnswer(id)}>
                            <button>Вперед</button>
                        </Link> : null}
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default SeventhPage;