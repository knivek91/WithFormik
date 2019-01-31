import React, { Component, Fragment } from 'react';
import AppBar from './component/AppBar';
import WithFormikForm from './component/WithFormik';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar />
        <WithFormikForm />
      </Fragment>
    );
  }
}

export default App;
