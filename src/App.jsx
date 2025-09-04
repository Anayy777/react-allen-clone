import React from "react";
import { BrowserRouter , Route , Routes} from "react-router-dom";
import { Index , Results , Courses , Help , About , Contact } from "./components/Pages";
import Error from "./components/Pages/Error";
import Layout from "./components/Layout/Layout";
import './App.css'

function App() {
  return (
    <div style={{padding : "20px"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Layout/>} >
              <Route index element = {<Index/>}></Route>
              <Route path="/about" element = {<About/>}></Route>
              <Route path="/contact" element = {<Contact/>}></Route>
              <Route path="/results" element = {<Results/>}></Route>
              <Route path="/courses" element = {<Courses/>}></Route>
              <Route path="/help" element = {<Help/>}></Route>
              <Route path="*" element = {<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;