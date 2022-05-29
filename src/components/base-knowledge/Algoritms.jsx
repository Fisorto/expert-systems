import {codeForDogs} from './DogArchive'
import arrayOfDogs from './DogArchive'
import arrayOfStingProperties from './DogArchive';



function theFidingDogs() {
    const arrayOfPerfectSelectedDogs = [];
    const arrayOfExelentSelectedDogs = [];
    const arrayOfGoodSelectedDogs = [];
    for(let i = 0; i < arrayOfDogs.length; i++ ) {
      let indexOfTrue = 0;
      for(let prop in arrayOfDogs[i]){
        if(arrayOfDogs[i][prop] === codeForDogs[prop]){
          indexOfTrue++;
        } 
      }
      if (indexOfTrue === 11){
        arrayOfPerfectSelectedDogs.push(arrayOfDogs[i]);
      } else if (indexOfTrue >=9 && indexOfTrue <= 10){
        arrayOfExelentSelectedDogs.push(arrayOfDogs[i]);
      } else if (indexOfTrue >=7 && indexOfTrue <= 8){
        arrayOfGoodSelectedDogs.push(arrayOfDogs[i]);
      }
      }
      return [arrayOfPerfectSelectedDogs, arrayOfExelentSelectedDogs, arrayOfGoodSelectedDogs]
    }

    export default theFidingDogs;

    export function recodingDogs(dog, properties) {
      const propertiesOfDog = [];
      let points = 0;
      for (let prop in dog){
        
        if (prop !== "id" && prop !== "number" && prop !== "name" && prop !== "img"){
          /* console.log(arrayOfStingProperties[0]) */
          if(dog[prop] === "a"){
            propertiesOfDog.push(properties[points][0])
          } else if (dog[prop] === "b"){
            propertiesOfDog.push(properties[points][1])
          } else if (dog[prop] === "c"){
            propertiesOfDog.push(properties[points][2])
          } else if(dog[prop] === "d"){
            propertiesOfDog.push(properties[points][3])
          }
          points++;
        }
      }
      // console.log(propertiesOfDog);
      return propertiesOfDog;
    }