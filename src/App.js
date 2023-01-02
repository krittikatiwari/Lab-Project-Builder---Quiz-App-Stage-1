import './App.css';
import Home from './components/home';
import Quiz from './components/quiz';
import Result from './components/result';

function App() {
  return (
    <div className="App">
      <div className='front'>
      <Home/>
      </div>
      <div className='mid'>
      <Quiz/>
      </div>
      <div className='end'>
      <Result/>
      </div>
    </div>
  );
}

export default App;