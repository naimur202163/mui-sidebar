import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
