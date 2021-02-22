import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
// import i18next from 'i18next';
// import { useTranslation } from 'react-i18next';
// import MainPages from './components/mainpages/Pages'
// import DetailsProduct from './components/mainpages/utils/productItem/DetailsProduct';
// import Singleproduct from './components/headers/Singleproduct';


function App() {
  // const { t } = useTranslation();

  // function handleClick(lang) {
  //   i18next.changeLanguage(lang)
  // }
  return (
    <div className="App">
    <DataProvider>
      <Router>
          <Header />
          {/* <button onClick={()=>handleClick('en')}>
            english
          </button>
          <button  onClick={()=>handleClick('ko')}>
          korean
          </button> */}
          {/* <h2>{t('thanks')}</h2> */}
      </Router>
    </DataProvider>
    </div>

  );
}

export default App;
