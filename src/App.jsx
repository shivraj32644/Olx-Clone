import logo from './logo.svg';
import './App.css';
import EditProfile from './component/User/EditProfile';
import AllRoutes from './component/User/Routes/Routes';
import { Link } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">

      {/* <EditProfile/> */}
      <AllRoutes/>
    
    </div>
  );
}

export default App;
