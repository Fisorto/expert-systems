
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
const showtyGoal = "b";
const blindGoal = "c";
const justADogGoal = "d";
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
//Дім
const housHome = "a";
const flatHome = "b";
//Алергія
const yesAlegric = "a";
const noAlegric = "b";
//Діти
const yesChild = "a";
const noChild = "b";
//Інші тварини
const yesAnimal = "a";
const noAnimal = "b";

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
  
  /* const sampleDog = new Dogs(
    size:,
    time :,
    experience:,
    training:,
    goal:,
    activity :,
    wool:,
    loud:,
    yourHome:,
    alergic:,
    child:,
    otherAnimal:,
  
    id:,
    number:,
    name:'',
    img:'',
  }); */
  
  /* const testDog = new Dogs({
  
    size:"a",
    experience:"a",
    time :"a",
    training:"a",
    goal:"a",
    activity :"a",
    wool:"a",
    loud:"a",
    yourHome:"a",
    alergic:"a",
    child:"a",
    otherAnimal:"a",
  
    id:1,
    number:1,
    name:'Sharik',
    img:'',
  }); */
  const pug = new Dogs({
  
    size: smallSize,
    time : fewTime,
    experience: noExperience,
    training: noTraining,
    goal: justADogGoal,
    activity : unhurriedActivity,
    wool: shortWoll,
    volume: quietVolume,
    alergic: noAlegric,
    child: yesChild,
    otherAnimal: yesAnimal,
  
    id: 1,
    number: 1,
    name: 'Мопс',
    img: '',
  });
  const arrayOfDogs = [pug];

  export default arrayOfDogs;