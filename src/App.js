import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Main from './components/Main';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Project from './components/Project'
import Footer from './components/Footer'
import './App.css';
import './index.css';


class App extends Component {
  render() {
    return (
      <div>   
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/main" component={Main} />
            <Route path="/contact" component={Contact}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="project" component={Project}/>
            </Switch>
        </BrowserRouter>
        <Footer/>


      </div>
    );
  }
}

export default App;
