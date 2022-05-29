import './ResultPage.scss';
import theFidingDogs from "../base-knowledge/Algoritms"
import {recodingDogs} from "../base-knowledge/Algoritms"
import arrayOfStingProperties from '../base-knowledge//DogArchive';






function ResultPage() {
const [arrayOfPerfectSelectedDogs, arrayOfExelentSelectedDogs, arrayOfGoodSelectedDogs] = theFidingDogs();

    return (
      <section className='home-section'>
            <div className="result-page">
              <div className="result-area">
                <h2>Ваш результат, це ось такий песик:</h2>
                <div  >Ідеальні собаки:{
                  arrayOfPerfectSelectedDogs.map((comp)=>{
                    return (<div key={comp.id}> {comp.name} </div >) 
                  })}</div >
                  <div  >Майже ідеальні собаки:{
                  arrayOfExelentSelectedDogs.map((comp)=>{
                    return (<div  key={comp.id}> {comp.name} </div >) 
                  })}</div >
                  <div  >Собаки які можливо підійдуть:{
                  arrayOfGoodSelectedDogs.map((comp)=>{
                    return (
                    <div  key={comp.id}> 
                    <div>
                      <details>
                        <summary>{comp.name}</summary>
                        {recodingDogs(comp, arrayOfStingProperties)}
                      </details>
                    </div> 
                    </div>) 
                  })}</div >
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