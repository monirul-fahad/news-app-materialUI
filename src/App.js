import "./App.css";
// import { Button, Rating } from "@mui/material";
import Newspaper from "./components/Newspaper/Newspaper";

function App() {
  return (
    <div className="App">
      {/* <Button variant="contained">MUI Button</Button>
      <Rating name="read-only" value={4} readOnly /> */}
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
