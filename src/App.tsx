import React from 'react';
import './App.scss';
import Footer from './navigation/Footer';
import Navigation from './navigation/Navigation';
import HomePage from './pages/HomePage';
import Drawer from '@material-ui/core/Drawer';
import decorationWhite from '../assets/images/decoration/decoWhite.png'
import {Provider} from 'react-redux'
import Store from './store/Store'

function App() {
  //const open = useSelector(openSelector)
  return (
    <Provider store={Store}>
    <div className="App">
      <Navigation/>
      <HomePage/>
      <Footer />

    </div>
    </Provider>
  );
}

export default App;
