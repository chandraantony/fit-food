import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar'
import Home from './components/pages/index'
import NotFound from './components/pages/pageNotFound';
import FoodOrder from './components/order';
import OrderDetail from './components/orderDetail';
import './assets/css/transition.css'
import SimpleToggle from './components/pages/test';
import Profile from './components/pages/profile';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { isLogin } from './utils/auth';



const App =()=>{
  const status = isLogin();
  return (
    <Router> 
      <Navbar status={status}/>
        <TransitionGroup >
          <CSSTransition
            // key={location.key}
            timeout={300}
            classNames='fade'
          >
            <Switch>         
              <Route exact path='/' component={Home} />  
              <Route exact path='/foodOrder' component={FoodOrder} />
              <Route exact path='/test' component={SimpleToggle} />
              <Route exact path='/orderDetail' component={OrderDetail}/>
              <Route exact path='/myProfile' component={Profile}/>
              <Route path="*" component={NotFound}/>           
            </Switch>   
          </CSSTransition>
        </TransitionGroup>     
    </Router>
)};
export default App;

// // import './App.css';
// import React from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import Nav from './components/navbar'
// import Index from './components/index'
// import AboutUs from './components/aboutUs'

// function App() {
//   return (
//     <div>
//       <Nav></Nav>
//       <Router>
//       <Switch>
//         <Route exact path="/"  component={Index}></Route>
//         <Route exact path="/about"  component={AboutUs}></Route>
//         {/* <Route exact path="/home" component={Home}></Route>
//         <Route exact path="/login" component={Login}></Route> */}
//         {/* <Route path="*" foo="bar"  component={() => <ErrorPage status={404} />}></Route> */}
//       </Switch>
//     </Router>
//     </div>

//   );
// }

// export default App;
