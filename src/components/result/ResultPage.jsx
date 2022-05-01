import './ResultPage.scss';



/* class Dogs{
  constructor(options){
      this.id = options.id;
      this.number = options.number;
      this.name = options.name;
      this.img = options.img;

      this.size = options.size;
      this.character = options.character;
      this.mind = options.mind;
      this.goal = options.goal;
      this.enegretic = options.enegretic;
      this.tail = options.tail;
      this.ears = options.ears;

      this.yourHome = options.yourHome;
      this.alergic = options.alergic;
      this.child = options.child;
      this.otherAnimal = options.otherAnimal;


  }
} */

/* const testDog = new Dogs({
  id:1,
  number:1,
  name:'Sharik',
  img:'The link to image',
  size:'Big',
  character:'Lazy',
  mind:'fool',
  goal:'toy',
  energetic:'Yes',
  tail:'Yes',
  ears:'normal',
  yourHome:'house',
  alergic:'no',
  child:'no',
  otherAnimal:'no'
}); */
      

function ResultPage() {
    return (
      <section className='home-section'>
            <div className="result-page">
              <div className="result-area">
                <h2>Ваш результат, це ось такий песик:</h2>
                <span colot="red">Назва песика та його картинка</span>
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