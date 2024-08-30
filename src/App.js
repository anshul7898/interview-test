import './App.css';
import Header from './Components/header';
import SideMenu from './Components/sidemenu';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <SideMenu></SideMenu>
      </div>
    </Router>
  );
}

export default App;
