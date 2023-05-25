import { BrowserRouter } from "react-router-dom";
import Routers from "./Components/Routers";
import Nav from "./Components/Header";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Nav />
          <Routers />
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
