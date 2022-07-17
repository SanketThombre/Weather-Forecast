import logo from './logo.svg';
import './App.css';
import {Search} from './Components/Search'
import { WeeklyForecast } from './Components/WeeklyForecast';
function App() {
  return (
    <div className="App">
      <Search /> 
      <WeeklyForecast/>
    </div>
  );
}

export default App;
