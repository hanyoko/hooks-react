import './App.css';
import './Style.css';

function App() {
  const pArr = [
    <p key={1}>안녕하세요1</p>,
    <p key={2}>안녕하세요2</p>,
    <p key={3}>안녕하세요3</p>
  ]
  return (
    <div className="App">
        {pArr}
    </div>
  );
}

export default App;
