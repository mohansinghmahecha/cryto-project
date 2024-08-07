import { store } from './Redux/State/store';
import './App.css';
import Navbar from './compnent/Navbar';
import MainComponent from './compnent/main-component/MainComponent';

function App() {
  console.log("redux at app.js",store.getState());

  return (
    <div className="App">
     
     <Navbar/>   {/* menu bar */}
     <MainComponent/>
    </div>
  );
}

export default App;
