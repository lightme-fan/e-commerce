import React, { Fragment, useContext } from 'react'
import { GeneralContext } from '../contexts/AppContext';
import Header from '../components/Header';

const Home = () => {
  const state = useContext(GeneralContext);
  // console.log("state:::::::::::", state);
  if (!state) {
    // Handle the null case
    console.error('MyContext is null');
    return null;
  }
  
  return (
    <Fragment>
      <Header />
    </Fragment>
  )
}

export default Home;
