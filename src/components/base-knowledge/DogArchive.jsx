import Pug from "./img/Pug.png"
import Berns from "./img/Berns.png"
import Bigl from "./img/Bigl.png"
import BretonSpaniel from "./img/BretonSpaniel.png"
import Chau from "./img/Chau.png"
import Chihua from "./img/Chihua.png"
import Dlmat from "./img/Dlmat.png"
import Dusp from "./img/Dusp.png"
import FrenchBuld from "./img/FrenchBuld.png"
import GoldenRetr from "./img/GoldenRetr.png"
import KokerSpaniel from "./img/KokerSpaniel.png"
import Kolli from "./img/Kolli.png"
import Labrador from "./img/Labrador.png"
import Mexic from "./img/Mexic.png"
import Rottwel from "./img/Rottwel.png"
import Shpiec from "./img/Shpiec.png"
import SiberHusky from "./img/SiberHusky.png"
import Bulter from "./img/Bulter.png"
import Podle from "./img/Podle.png"
import Shitzu from "./img/Shitzu.png"






//Розмір:
const smallSize = "a";
const mediumSize = "b";
const bigSize = "c";
//Час:
const fewTime = "a";
const hourTime = "b";
const hourThourTime = "c";
const thourTime = "d";
//Досвід
const noExperience = "a";
const haveExperience = "b";
const aLotOFExperience = "c";
//Дресирування
const noTraining = "a";
const haveTraining = "b";
const aLotOFTraining = "c";
//Ціль
const securityGoal = "a";
const blindGoal = "b";
const justADogGoal = "c";
//Прогулянки
const unhurriedActivity = "a";
const mediumIntensityActivity = "b";
const intensiveActivity = "c";
//Шерсть
const withoutWoll = "a";
const shortWoll = "b";
const mediumWoll = "c";
const longWoll = "d";
//Гучність
const quietVolume = "a";
const mediumVolume = "b";
const loudVolume = "c";
//Алергія
const yesAlegric = "a";
const noAlegric = "b";
//Діти
const yesChild = "a";
const noChild = "b";
//Інші тварини
const yesAnimal = "a";
const noAnimal = "b";

export const codeForDogs = {
  size :"",
  time :"",
  experience :"",
  training : "",
  goal : "",
  activity : "",
  wool :"",
  volume : "",
  alergic : "",
  child : "",
  otherAnimal : "",
}

class Dogs{
    constructor(options){
        this.size = options.size;
        this.time = options.time;
        this.experience = options.experience;
        this.training = options.training;
        this.goal = options.goal;
        this.activity = options.activity;
        this.wool = options.wool;
        this.volume = options.volume;
  
        this.alergic = options.alergic;
        this.child = options.child;
        this.otherAnimal = options.otherAnimal;
  
  
        this.id = options.id;
        this.number = options.number;
        this.name = options.name;
        this.img = options.img;
    }
  } 
  
  const pug = new Dogs({
  
    size: smallSize,
    time: fewTime,
    experience: noExperience,
    training: noTraining,
    goal: justADogGoal,
    activity: unhurriedActivity,
    wool: shortWoll,
    volume: quietVolume,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: [yesAnimal,noAnimal],
  
    id: 1,
    number: 1,
    name: 'Мопс',
    img: Pug,
  });

  const cockerSpaniel = new Dogs({
    size: mediumSize,
    time : thourTime,
    experience: noExperience,
    training: haveTraining,
    goal: justADogGoal,
    activity : intensiveActivity,
    wool: mediumWoll,
    volume: mediumVolume,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: noAnimal,
  
    id:2,
    number:2,
    name:'Кокер-спаніель',
    img: KokerSpaniel,
  });

  const siberianHusky = new Dogs({
      size: bigSize,
      time : thourTime,
      experience: haveExperience,
      training: aLotOFTraining,
      goal: [securityGoal, justADogGoal],
      activity : intensiveActivity,
      wool: longWoll,
      volume: mediumVolume,
      alergic: noAlegric,
      child: noChild,
      otherAnimal: noAnimal,
    
      id: 3,
      number: 3,
      name:'Сибірський Хаскі',
      img: SiberHusky,
  });

  const mexicanHairless = new Dogs({
    size: mediumSize,
    time : hourTime,
    experience: haveExperience,
    training: haveTraining,
    goal: justADogGoal,
    activity : unhurriedActivity,
    wool: withoutWoll,
    volume: quietVolume,
    alergic: [yesAlegric, noAlegric],
    child: noChild,
    otherAnimal: noAnimal,
  
    id: 4,
    number: 4,
    name:'Мексиканська лиса собака',
    img: Mexic,
  }); 
  const rottweiler = new Dogs({
    size: bigSize,
    time : hourThourTime,
    experience: aLotOFExperience,
    training: aLotOFTraining,
    goal: [securityGoal, justADogGoal],
    activity : mediumIntensityActivity,
    wool: shortWoll,
    volume: loudVolume,
    alergic: noAlegric,
    child: noChild,
    otherAnimal: noAnimal,
  
    id:5,
    number:5,
    name:'Ротвейлер',
    img: Rottwel,
  });

  const dachshund = new Dogs({
    size: smallSize,
    time : hourTime,
    experience: noExperience,
    training: haveTraining ,
    goal: justADogGoal,
    activity : unhurriedActivity,
    wool: shortWoll,
    volume: loudVolume ,
    alergic: noAlegric,
    child: noChild ,
    otherAnimal: noAnimal,
  
    id: 6,
    number: 6,
    name:' Такса',
    img: Dusp,
  });

  const labrador = new Dogs({
    size: bigSize,
    time : thourTime,
    experience: noExperience,
    training: noTraining,
    goal: [justADogGoal,blindGoal],
    activity :intensiveActivity,
    wool: shortWoll,
    volume: mediumVolume ,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: [yesAnimal,noAnimal],
  
    id: 7,
    number: 7,
    name:' Лабрадор',
    img: Labrador,
  });

  const frenchBulldog = new Dogs({
    size: smallSize,
    time: fewTime,
    experience: noExperience,
    training: noTraining,
    goal: justADogGoal,
    activity: unhurriedActivity,
    wool: shortWoll,
    volume: quietVolume,
    alergic: noAlegric,
    child: noChild,
    otherAnimal: noAnimal,
  
    id:8,
    number:8,
    name:'Французький бульдог',
    img: FrenchBuld,
  });

  const dalmatian = new Dogs({
    size: bigSize,
    time: thourTime,
    experience: aLotOFExperience,
    training: haveTraining,
    goal: justADogGoal,
    activity: intensiveActivity,
    wool: shortWoll,
    volume: mediumVolume,
    alergic: noAlegric,
    child: noChild,
    otherAnimal: noAnimal,
  
    id:9,
    number:9,
    name:'Далматинець',
    img: Dlmat,
  });
  
  const roughCollie= new Dogs({
    size: bigSize,
    time: hourThourTime,
    experience: aLotOFExperience,
    training: haveTraining,
    goal: [securityGoal, justADogGoal],
    activity: intensiveActivity,
    wool: longWoll,
    volume: mediumVolume,
    alergic: noAlegric,
    child: noChild,
    otherAnimal: noAnimal,
  
    id:10,
    number:10,
    name:'Довгошерстий коллі',
    img: Kolli,
  });

  const chowChow= new Dogs({
    size: bigSize,
    time: hourTime,
    experience: aLotOFExperience,
    training: aLotOFTraining,
    goal: [securityGoal, justADogGoal],
    activity: mediumIntensityActivity,
    wool: longWoll,
    volume: quietVolume,
    alergic: noAlegric,
    child: noChild,
    otherAnimal: noAnimal,
  
    id:11,
    number:11,
    name:'Чау-чау',
    img: Chau,
  });

  const bretonSpaniel = new Dogs({
    size: mediumSize,
    time: thourTime,
    experience: aLotOFExperience,
    training: aLotOFTraining,
    goal: justADogGoal,
    activity: intensiveActivity,
    wool: mediumWoll,
    volume: mediumVolume,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: noAnimal,
  
    id: 12,
    number: 12,
    name:'Бретонський Епаньоль',
    img: BretonSpaniel,
  });

  const berneseMountainDog = new Dogs({
    size: bigSize,
    time: hourTime,
    experience: haveExperience,
    training: haveTraining,
    goal:  justADogGoal,
    activity: unhurriedActivity,
    wool: longWoll,
    volume: quietVolume,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: [yesAnimal,noAnimal],
  
    id: 13,
    number: 13,
    name:'Бернський зенненхунд',
    img: Berns,
  });
  
  const germanSmallSpitz = new Dogs({
    size: smallSize,
    time: hourTime,
    experience: noExperience,
    training: noTraining,
    goal: justADogGoal,
    activity: unhurriedActivity,
    wool: mediumWoll,
    volume: loudVolume,
    alergic: noAlegric,
    child: noChild,
    otherAnimal: noAnimal,
  
    id: 14,
    number: 14,
    name:'Німецький шпіц',
    img: Shpiec,
  });

  const beagle = new Dogs({
    size: mediumSize,
    time: hourThourTime,
    experience: haveExperience,
    training: aLotOFTraining,
    goal: justADogGoal,
    activity: mediumIntensityActivity,
    wool: shortWoll,
    volume: loudVolume,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: noAnimal,
  
    id: 15,
    number: 15,
    name:'Бігль',
    img: Bigl,
  }); 

  const chihuahua = new Dogs({
    size: smallSize,
    time: fewTime ,
    experience: aLotOFExperience,
    training: noTraining,
    goal: justADogGoal,
    activity: unhurriedActivity,
    wool: shortWoll,
    volume: loudVolume,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: [yesAnimal,noAnimal],
  
    id: 16,
    number: 16,
    name:'Чихуахуа',
    img: Chihua,
  });

  const bullTerrier = new Dogs({
    size: mediumSize,
    time: hourTime,
    experience: aLotOFExperience,
    training: haveTraining,
    goal: justADogGoal,
    activity: mediumIntensityActivity,
    wool: shortWoll,
    volume: quietVolume,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: noAnimal,
  
    id: 17,
    number: 17,
    name:"Бультер'єр",
    img: Bulter,
  }); 

  const goldenRetriever = new Dogs({
    size: bigSize ,
    time: thourTime,
    experience: noExperience,
    training: noTraining,
    goal: [justADogGoal,blindGoal],
    activity:  intensiveActivity,
    wool: longWoll,
    volume: quietVolume,
    alergic: noAlegric,
    child: [yesChild,noChild],
    otherAnimal: [yesAnimal,noAnimal],
  
    id: 18,
    number: 18,
    name:'Золотистий ретривер',
    img: GoldenRetr,
  });

   const shihTzu = new Dogs({
    size: smallSize,
    time: fewTime,
    experience: noExperience,
    training: noTraining,
    goal: justADogGoal,
    activity: unhurriedActivity,
    wool: longWoll,
    volume: loudVolume,
    alergic: [yesAlegric, noAlegric],
    child: [yesChild,noChild],
    otherAnimal: [yesAnimal,noAnimal],
  
    id: 19,
    number: 19,
    name:'Ши тцу',
    img: Shitzu,
  }); 

   const poodle = new Dogs({
    size: bigSize,
    time: hourThourTime,
    experience: haveExperience,
    training: haveTraining,
    goal: justADogGoal,
    activity: intensiveActivity,
    wool: mediumWoll,
    volume: loudVolume,
    alergic:[yesAlegric, noAlegric],
    child: [yesChild,noChild],
    otherAnimal: [yesAnimal,noAnimal],
  
    id: 20,
    number: 20,
    name:'Пудель',
    img: Podle,
  }); 


  const arraySize = ["Маленька собака","Середня собака","Велика собака"]
  const arrayTime = ["Воліє гуляти півгодини на день", "Воліє гуляти годину на день", "Воліє гуляти від години до двох годинь на день"," Воліє гуляти більше двох годин на день"]
  const arrayExperience = ["Підходить для людей без досвіду догляду за собаками", "Підходить для людей з досвідом догляду за собаками","Підходить для людей з великим досвідом догляду за собаками"]
  const arrayTraining = ["Потрібні базові навичики дресирування","Потрібні базові навички та додаткові часи дресирування", "Порода для якої потрібно багато часу для дресирування"]
  const arrayGoal = ["Підходить для охорони", "Підходить для людией з вадами зору", "Підходить просто як вихованець"]
  const arrayActivity = ["Воліє до неспішних прогулянок", "Воліє до прогулянок середньої інтенсивності", "Воліє до активних прогулянок"]
  const arrayWool = ["Без шерсті", "Коротка шерсть","Cередня шерсть", "Довга шерсть"]
  const arrayVolume = ["Тиха", "Cередня по гучності","Гучна"]
  const arrayAlergic = ["Підходить для людей з алергією", "Підходить для людей без алергії"]
  const arrayChild = ["Підходить для людей з дітьми", "Підходить для людей без дітей"]
  const arrayOtherAnimal = ["Підходить для людей з іншими тваринами", "Підходить для людей у яких нема інших тварин"]

  export const arrayOfStingProperties = [
    arraySize, 
    arrayTime, 
    arrayExperience, 
    arrayTraining,
    arrayGoal,
    arrayActivity,
    arrayWool,
    arrayVolume,
    arrayAlergic,
    arrayChild,
    arrayOtherAnimal,
   ];
  
   export const arrayOfDogs = [
    pug,
    cockerSpaniel, 
    siberianHusky,
    mexicanHairless,
    rottweiler,
    dachshund,
    labrador,
    frenchBulldog,
    dalmatian,
    roughCollie,
    chowChow,
    bretonSpaniel,
    berneseMountainDog,
    germanSmallSpitz,
    beagle,
    chihuahua,
    bullTerrier,
    goldenRetriever,
    shihTzu,
    poodle
   ];

  export default arrayOfDogs;


  

   
