import Header from "./components/header";
import Config from "./pages/Config/configuraco";

import NewAdd from "./Add/listagem"

function App() {
  return (
    <div className="App">
      <Header />
      <NewAdd/>
      <Config/>
    </div>
  );
}

export default App;
