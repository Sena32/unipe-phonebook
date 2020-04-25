import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Wrapper from './components/wrapper'
import Phonebook from './containers/phonebook'
import PhonebookDetail from './containers/phonebookDetail'
import NewPhonebook from './containers/newPhonebook';
import './App.css';


const App = () => (
  <Router>
    <Switch>
      <Wrapper>
        <Route exact path='/' component={Phonebook} />
        <Route exact path='/phonebook-detail/:phoneId' component={PhonebookDetail} />
        <Route exact path='/new-phonebook' component={NewPhonebook} />
      </Wrapper>
    </Switch>
  </Router>
)

export default App;
