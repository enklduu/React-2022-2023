import "./App.css";
import Componente1 from "./components/Componente1";
import Componente5 from "./components/Componente5";
import { ContextInfoProvider } from "./contexts/InfoContext";
import { ContextLoginProvider } from "./contexts/LoginContext";
import { ContextPersonProvider } from "./contexts/NewContext";

function App() {
  return (
    <div className="App">
      <ContextInfoProvider>
        <ContextPersonProvider>
          <ContextLoginProvider>
            <Componente1 />
            <Componente5 />
          </ContextLoginProvider>
        </ContextPersonProvider>
      </ContextInfoProvider>
    </div>
  );
}

export default App;
