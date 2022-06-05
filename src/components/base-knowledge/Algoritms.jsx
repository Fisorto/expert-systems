import {codeForDogs} from './DogArchive'
import arrayOfDogs from './DogArchive'

/* if(typeof arrayOfDogs[i][prop] === 'object'){
  for(let j = 0; j < arrayOfDogs[i][prop].length; j++){
    if(arrayOfDogs[i][prop][j] === codeForDogs[prop]){
      indexOfTrue++;
      console.log(`Перша точка:${arrayOfDogs[i][prop][j]}`)
      break;
    } 
  }
} */


function theFidingDogs() {
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
            if(typeof dog[prop] === 'object'){
            for(let i = 0;i < dog[prop].length; i++){
              if(dog[prop][i] === "a"){
                if(dog[prop][i] === codeForDogs[prop]){
                  propertiesOfDog.push(`+ ${properties[points][0]}`)
                } else if(dog[prop][i] !== codeForDogs[prop]){
                  propertiesOfDog.push(`- ${properties[points][0]}`)
                }
              }
              if(dog[prop][i] === "b"){
                if(dog[prop][i] === codeForDogs[prop]){
                  propertiesOfDog.push(`+ ${properties[points][1]}`)
                } else if(dog[prop][i] !== codeForDogs[prop]){
                  propertiesOfDog.push(`- ${properties[points][1]}`)
                }
              }
              if(dog[prop][i] === "c"){
                if(dog[prop][i] === codeForDogs[prop]){
                  propertiesOfDog.push(`+ ${properties[points][2]}`)
                } else if(dog[prop][i] !== codeForDogs[prop]){
                  propertiesOfDog.push(`- ${properties[points][2]}`)
                }
              }
              if(dog[prop][i] === "d"){
                if(dog[prop][i] === codeForDogs[prop]){
                  propertiesOfDog.push(`+ ${properties[points][3]}`)
                } else if(dog[prop][i] !== codeForDogs[prop]){
                  propertiesOfDog.push(`- ${properties[points][3]}`)
                }
              }
            }
          } 
          // console.log(arrayOfStingProperties[0][prop])
          // console.log(prop)
          if(dog[prop] === "a"){
            /* propertiesOfDog.push(properties[points][0]) */
            if(dog[prop] === codeForDogs[prop]){
              propertiesOfDog.push(`+ ${properties[points][0]}`)
            } else if(dog[prop] !== codeForDogs[prop]){
              propertiesOfDog.push(`- ${properties[points][0]}`)
            }
          } else if (dog[prop] === "b"){
            /* propertiesOfDog.push(properties[points][1]) */
            if(dog[prop] === codeForDogs[prop]){
              propertiesOfDog.push(`+ ${properties[points][1]}`)
            } else if(dog[prop] !== codeForDogs[prop]){
              propertiesOfDog.push(`- ${properties[points][1]}`)
            }
          } else if (dog[prop] === "c"){
            /* propertiesOfDog.push(properties[points][2]) */
            if(dog[prop] === codeForDogs[prop]){
              propertiesOfDog.push(`+ ${properties[points][2]}`)
            } else if(dog[prop] !== codeForDogs[prop]){
              propertiesOfDog.push(`- ${properties[points][2]}`)
            }
          } else if(dog[prop] === "d"){
            /* propertiesOfDog.push(properties[points][3]) */
            if(dog[prop] === codeForDogs[prop]){
              propertiesOfDog.push(`+ ${properties[points][3]}`)
            } else if(dog[prop] !== codeForDogs[prop]){
              propertiesOfDog.push(`- ${properties[points][3]}`)
            }
          }
          points++;
        }

        /* let numbr = 0
        for (let props in codeForDogs) {
          if ()
          numbr++;
        } */
      }
      // console.log(propertiesOfDog);
      return propertiesOfDog;
    }