import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from "./components/home/HomePage"

import FirstPage from "./components/pages/FirstPage"
import SecondPage from "./components/pages/SecondPage"
import ThirdPage from "./components/pages/ThirdPage"
import FourthPage from "./components/pages/FourthPage"
import FifthPage from "./components/pages/FifthPage"
import SixthPage from "./components/pages/SixthPage"
import SeventhPage from "./components/pages/SeventhPage"
import EighthPage from "./components/pages/EighthPage"
import NinthPage from "./components/pages/NinthPage"
import TenthPage from "./components/pages/TenthPage"
import EleventhPage from "./components/pages/EleventhPage"
import TwelfthPage from "./components/pages/TwelfthPage"

import ResultPage from "./components/result/ResultPage"

import './App.scss';





function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/first" element={<FirstPage />}/>
          <Route path="/second" element={<SecondPage/>}/>
          <Route path="/third" element={<ThirdPage/>}/>
          <Route path="/fourth" element={<FourthPage/>}/>
          <Route path="/fifth" element={<FifthPage/>}/>
          <Route path="/sixth" element={<SixthPage/>}/>
          <Route path="/seventh" element={<SeventhPage/>}/>
          <Route path="/eighth" element={<EighthPage/>}/>
          <Route path="/ninth" element={<NinthPage/>}/>
          <Route path="/tenth" element={<TenthPage/>}/>
          <Route path="/eleventh" element={<EleventhPage/>}/>
          <Route path="/twelfth" element={<TwelfthPage/>}/>

          <Route path="/result" element={<ResultPage/>}/>

        </Routes>
    </Router>
      
    </>
  );
}

export default App;
