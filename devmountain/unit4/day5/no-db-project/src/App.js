import './App.css';
import ArmyList from './components/ArmyList'

function App() {
  return (
    <div className="App" style={{height:'fit-content', backgroundColor:'lightseagreen', display:'flex', flexDirection:'column'}}>
      <h1>Clone Army Builder</h1>
      <ArmyList />
    </div>
  );
}

export default App;
