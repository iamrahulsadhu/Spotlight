import './App.css';
//import Nav from './components/Nav';
//import Textform from './components/Textform';
import Auth from './navigation/Auth';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="container-fluid container-Main">
      <div className="dashboard-rowMain">
<Auth/>
</div>
</div>
</Router>
  );
}
export default App;

