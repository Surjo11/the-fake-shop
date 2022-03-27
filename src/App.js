import './App.css';
import Header from './components/Header/Header';
import InfoReact from './components/InfoAboutReact/InfoReact';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Shop></Shop>
        <InfoReact></InfoReact>
    </div>
  );
}

export default App;
