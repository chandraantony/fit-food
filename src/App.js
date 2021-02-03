import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar'
import Index from './components/index'
import Journey from './components/journey'
import AboutUs from './components/aboutUs'
import Home from './components/pages/index'
import Footer from './components/footer'
import TodayMenu from './components/todayMenu'
import Testimonial from './components/testimonial'
import NotFound from './components/pages/pageNotFound';
import FoodOrder from './components/order';


const App =()=>{
  return (
    <Router>
        <Navbar />   
            <Switch>
              <Route exact path='/' component={Home} /> 
              <Route exact path='/home' component={Home} /> 
              <Route exact path='/about' component={AboutUs} /> 
              <Route exact path='/journey' component={Journey} />
              <Route exact path='/menu' component={TodayMenu} />
              <Route exact path='/foodOrder' component={FoodOrder} />
              <Route exact path='/testimonial' component={Testimonial} />   
              <Route path="*" component={NotFound}/>           
            </Switch>        
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
