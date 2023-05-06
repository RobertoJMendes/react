import './App.css';
import FirstComponent from './components/FirstComponent';
import AnotherComponent from './components/AnotherComponent';
import Images from "./components/Images";
import Hooks from './components/Hooks';
import List from './components/List';
import RenderizaçãoCondicional from './components/RendCond';
import RendCondComProps from './components/RendCondComProps';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      {<h2>hello word</h2>}
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderizaçãoCondicional />
      <RendCondComProps x={6} y={6} />
      <Container>
        <h2>Este é um elemento Filho!</h2>
      </Container>
    </div>
  );
}

export default App;
