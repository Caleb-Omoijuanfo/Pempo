import React from 'react';

import Nav from './components/Nav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Story } from './pages/Story';
import { Footer } from './pages/Footer';
import { AllPost } from './pages/AllPost';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render(){    
    return (
      <div>  
        <Nav />    
        <Switch>          
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/posts/:id" component={Story} />
          <Route path="/posts/all-posts/:id" component={AllPost} />
        </Switch>

        <Footer />        
      </div>
    );
  }
}

export default App;
