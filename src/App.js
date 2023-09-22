import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Title from './components/title';

function App() {
  return (
    <div className="App">
      <Title title={"My title"}/>
      <Title title={"My 2nd title"}/>
      <Button />
    </div>
  );
}

export default App;
