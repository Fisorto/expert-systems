import { useState } from 'react';
import { Link } from 'react-router-dom';
import {codeForDogs} from '../base-knowledge/DogArchive'
import './pages-styles/PagesStyles.scss';



const sizeAnswerArray = [
    {   
        id : "a1",
        code: "a",
        value: "Маленька "      
    },
    {   
        id : "b1",
        code: "b",
        value: "Середня "      
    },
    {
        id : "c1",
        code: "c",
        value: "Велика "      
    },
]





function FirstPage() {

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
        codeForDogs.size = anwer;
        
    };

    return (
      <section className='home-section'>
            <div className="total-area">

                <div className="question-area">
                    <h2>
                        1.Якого розміру повина бути собака?
                    </h2>
                    </div>
                <div className="answer-area">
                    {sizeAnswerArray.map((prop)=>{
                        return(
                        <div  key={prop.id}>
                            <input  id={prop.id} name="first_question" type="radio"  onClick={()=>idChanger(prop.code)}/>
                            <label className='element-answer' htmlFor={prop.id} >{prop.value}</label>
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
                        <Link to="/" onClick={()=>setAnswer("")}>
                            <button>Назад</button>
                        </Link>
                    </div>
                    <div className="button-button">
                    {flag ? <Link to="/second" onClick={()=>setAnswer(id)}>
                            <button>Вперед</button>
                        </Link> : null}
                    </div>
                </div>
                
            </div>
      </section>
    );
  }
  
  export default FirstPage;