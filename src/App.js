import React, { Component } from 'react';
// import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/burger-builder/burgerBuilder';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
