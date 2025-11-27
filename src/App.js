import './App.css';
import Props from "./day1/Props";
import State from './day2/State';
import ListWrap from './day3/ListWrap';
import Parent from './day3/Parent';
import Event from './day4/Event';
const App = ()=>{
  return (
    <div className='app'>
      {/* <Parent /> */}
      {/* <ListWrap /> */}
      <Event />
    </div>
  );
};
export default App;