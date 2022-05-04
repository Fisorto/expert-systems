
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
const curlyWoll = "e";
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
  
  /* const sampleDog = new Dogs({
    size:,
    time :,
    experience:,
    training:,
    goal:,
    activity :,
    wool:,
    volume:,
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
    child: yesChild,
    otherAnimal: noAnimal,
  
    id:2,
    number:2,
    name:'Кокер-спаніель',
    img:'',
  });

  const siberianHusky = new Dogs({
      size: bigSize,
      time : hourThourTime,
      experience: haveExperience,
      training: aLotOFTraining,
      goal: securityGoal,
      activity : intensiveActivity,
      wool: longWoll,
      volume: mediumVolume,
      alergic: noAlegric,
      child: noChild,
      otherAnimal: noAnimal,
    
      id: 3,
      number: 3,
      name:'Сибірський Хаскі',
      img:'',
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
    alergic: yesAlegric,
    child: noChild,
    otherAnimal: noAnimal,
  
    id: 4,
    number: 4,
    name:'Мексиканська лиса собака',
    img:'',
  }); 
  const rottweiler = new Dogs({
    size: bigSize,
    time : hourThourTime,
    experience: aLotOFExperience,
    training: aLotOFTraining,
    goal: securityGoal,
    activity : mediumIntensityActivity,
    wool: shortWoll,
    volume: loudVolume,
    alergic: noAlegric,
    child: noChild,
    otherAnimal: noAnimal,
  
    id:5,
    number:5,
    name:'Ротвейлер',
    img:'',
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
    img:'',
  });

  const labrador = new Dogs({
    size: bigSize,
    time : thourTime,
    experience: noExperience,
    training: noTraining,
    goal: blindGoal,
    activity :intensiveActivity,
    wool: shortWoll,
    volume: mediumVolume ,
    alergic: noAlegric,
    child: yesChild ,
    otherAnimal: yesAnimal,
  
    id: 7,
    number: 7,
    name:' Лабрадор',
    img:'',
  });
  
  const arrayOfDogs = [
    pug,
    cockerSpaniel, 
    siberianHusky,
    mexicanHairless,
    rottweiler,
    dachshund,
    labrador, 
   ];

  export default arrayOfDogs;