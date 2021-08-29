import { Route, BrowserRouter} from 'react-router-dom'

import { Home } from '../src/pages/Home'
import { Additionals } from '../src/pages/Additionals'

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Home}/>
    <Route path="/personalize" exact component={Additionals}/>
    </BrowserRouter>
  );
}

export default App;
