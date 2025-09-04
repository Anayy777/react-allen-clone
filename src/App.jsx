import React from "react";
import { BrowserRouter , Route , Routes} from "react-router-dom";

function App() {

  
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Index/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;