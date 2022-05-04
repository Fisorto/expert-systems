import './ResultPage.scss';
import arrayOfDogs from './DogArchive'

import { codeForDogs } from '../pages/FirstPage';




function ResultPage() {
const arrayOfSelectedDogs = [];
  for(let i = 0; i < arrayOfDogs.length; i++ ) {
    let indexOfTrue = 0;
    for(let prop in arrayOfDogs[i]){
      if(arrayOfDogs[i][prop] === codeForDogs[prop]){
        indexOfTrue++;
        console.log(arrayOfDogs[i])
        console.log("YES")
      } else {
        console.log("NO")
      }
      
    }
    if (indexOfTrue === 11){
      arrayOfSelectedDogs.push(arrayOfDogs[i]);
      console.log(arrayOfSelectedDogs)
    }
    console.log(indexOfTrue);
  } 

    return (
      <section className='home-section'>
            <div className="result-page">
              <div className="result-area">
                <h2>Ваш результат, це ось такий песик:</h2>
                <span >{
                  arrayOfSelectedDogs.map((comp)=>{
                    return (<span key={comp.id}>{comp.name}</span>) 
                  })}</span>
              </div>
              <div className="back-to-home">
                <a href="../">
                    <button>Головна</button>
                </a>
              </div>
            </div>
      </section>
    );
  }
  
  export default ResultPage;