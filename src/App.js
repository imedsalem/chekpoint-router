import { Routes, Route} from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import {data} from './dataMovies';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/Details/:id" element={<Details data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;