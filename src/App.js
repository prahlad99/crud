// import { React} from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Contact from "./componants/Contact";
import About from './componants/About';
import Home from "./componants/Home";
import Navbar from './componants/layout/navbar';
import { BrowserRouter as Router ,Route,Switch} from  "react-router-dom";
import NotFound from './componants/NotFound';
import AddUser from './componants/users/AddUser';
import EditUser from './componants/users/EditUser';
import User from './componants/users/View';
function App() {
  return (
    <Router>
      <div className="App">

<Navbar/>
<switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/contact" component={Contact}/>
 <Route exact path="/users/edit/:id" component={EditUser}/>
 
 <Route exact path="/users/add" component={AddUser}/>
 <Route exact path="/users/View/:id" component={User}/>
 {/* <Route component={NotFound}/>  */}
 </switch>
 
 
</div>
    </Router>
  );
}

export default App;
