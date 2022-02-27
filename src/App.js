import Home from "./pages/Home";
import Oppgave1 from "./oppgave1/Oppgave1";

import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Design from "./oppgave1/Design";
import Programming from "./oppgave1/Programming";
import Support from "./oppgave1/Support";

//theme provider to controll responsive mainly
import {ThemeProvider} from 'styled-components';

const theme = {
    desktop: '768px',
    home: {
      bg: 'red',
      boxWidth: '200px',
      boxHeight: '200px',
    }
}
function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div className="App">
      <Switch>
      <Route path='/' element={<Home/>}/>
      <Route path='/oppgave1' element={<Oppgave1/>} />
      <Route path='/design' element={<Design/>}/>
      <Route path="/programming" element={<Programming/>} />
      <Route path='/support' element={<Support/>} />
      </Switch>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
