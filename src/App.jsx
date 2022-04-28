import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomePage from "./components/home/HomePage"
import FirstPage from "./components/pages/FirstPage"

import './App.scss';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/first" element={<FirstPage/>}/>

        </Routes>
    </Router>
      
    </>
  );
}

export default App;
