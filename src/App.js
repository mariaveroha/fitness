import './App.css';
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Exercises from './Components/Exercises/Exercises'
import Workout from './Components/Workout/Workout'
import Programs from './Components/Programs/Programs'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Banner />
        <Exercises/>
        <Workout/>
        <Programs/>
      </div>

    </div>
  );
}

export default App;
