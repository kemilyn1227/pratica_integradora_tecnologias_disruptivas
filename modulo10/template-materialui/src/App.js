import Header from "./components/header";
import Config from "./pages/Config/configuraco";
import Login from "./pages/Login/login";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Config/>
    </div>
  );
}

export default App;
