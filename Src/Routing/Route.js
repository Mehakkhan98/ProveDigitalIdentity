import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Start from '../Pages/Start';
import Settings from '../Pages/Settings';
import FAQ from '../Pages/FAQ';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Scaner from '../Pages/Scann';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "Start" component = {Start}  initial = {true} />
         <Scene key = "Setting" component = {Settings} title = "Settings" />
         <Scene key = "About" component = {About} title = "About" />
         <Scene key = "FAQ" component = {FAQ} title = "FAQ" />
         <Scene key = "Home" component = {Home} title = "Identification" />
         <Scene key = "Contact" component = {Contact} title = "Contact" />
         <Scene key = "Scanner" component = {Scaner} title = "Scanner" />
      </Scene>
   </Router>
)
export default Routes