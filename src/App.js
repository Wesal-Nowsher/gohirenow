import React from 'react';
import './styles/main.css';
import './styles/Responsive.css';
import Routes from "./routes/index";
import { Provider } from "./store/reducer";

function App() {
  return (
    <Provider>
    <div className="App">
        <Routes/>
    </div>
    </Provider>
  );
}
export default App;
