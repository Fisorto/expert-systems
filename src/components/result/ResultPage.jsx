import './ResultPage.scss';
import arrayOfDogs from '../base-knowledge/DogArchive'
import {codeForDogs} from '../base-knowledge/DogArchive'




function ResultPage() {
const arrayOfPerfectSelectedDogs = [];
const arrayOfExelentSelectedDogs = [];
const arrayOfGoodSelectedDogs = [];
  for(let i = 0; i < arrayOfDogs.length; i++ ) {
    let indexOfTrue = 0;
    for(let prop in arrayOfDogs[i]){
      if(typeof arrayOfDogs[i][prop] === 'object'){
        for(let j = 0; j < arrayOfDogs[i][prop].length; j++){
          if(arrayOfDogs[i][prop][j] === codeForDogs[prop]){
            indexOfTrue++;
            /* console.log(`Перша точка:${arrayOfDogs[i][prop][j]}`) */
            break;
          } 
        }
      }
      if(arrayOfDogs[i][prop] === codeForDogs[prop]){
        indexOfTrue++;
        /* console.log(`Друга точка:${arrayOfDogs[i][prop]}`) */
      } 
    }

    if (indexOfTrue === 11){
      arrayOfPerfectSelectedDogs.push(arrayOfDogs[i]);
      // console.log(arrayOfPerfectSelectedDogs)
    } else if (indexOfTrue >=9 && indexOfTrue <= 10){
      arrayOfExelentSelectedDogs.push(arrayOfDogs[i]);
      /* console.log(arrayOfExelentSelectedDogs) */
    } else if (indexOfTrue >=7 && indexOfTrue <= 8){
      arrayOfGoodSelectedDogs.push(arrayOfDogs[i]);
     /*  console.log(arrayOfGoodSelectedDogs) */
    }
    } 

    return (
      <section className='home-section'>
            <div className="result-page">
              <div className="result-area">
                <h2>Ваш результат, це ось такий песик:</h2>
                <span >Ідеальні собаки:{
                  arrayOfPerfectSelectedDogs.map((comp)=>{
                    return (<span key={comp.id}> {comp.name} </span>) 
                  })}</span><br></br>
                  <span >Майже ідеальні собаки:{
                  arrayOfExelentSelectedDogs.map((comp)=>{
                    return (<span key={comp.id}> {comp.name} </span>) 
                  })}</span><br></br>
                  <span >Собаки які можливо підійдуть:{
                  arrayOfGoodSelectedDogs.map((comp)=>{
                    return (<span key={comp.id}> {comp.name} </span>) 
                  })}</span><br></br>
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