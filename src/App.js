import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Phonebook from './containers/phonebook'
import PhonebookDetail from './containers/phonebookDetail'
import PhonebookForm from './containers/phonebookForm';
import './App.css';


const App = () => (
  <Router>
    <Switch>
        <Route exact path='/' component={Phonebook} />
        <Route path='/beers/:phoneId' component={PhonebookDetail} />
        <Route exact path='/new-phonebook' component={PhonebookForm} />
        <Route exact path='/phonebook/:phoneId' component={PhonebookForm} />
    </Switch>
  </Router>
)

export default App;
