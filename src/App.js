//imports
import { Nav } from "./components/Nav/Nav";
import { Main } from './pages/Main';

function App() {
  return (
    <div className="App">
      <Nav sticky="top" />
      <Main />
    </div>
  );
}

export default App;
