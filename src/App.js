import './App.scss';
import { BrowserRouter} from "react-router-dom";
import MainRoutes from './components/mainroutes/mainroutes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        {MainRoutes()}
    </div>
    </BrowserRouter>
  );
}

export default App;
