import Home from "./pages/Home";
import Oppgave1 from "./oppgave1/Oppgave1";

import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import Design from "./oppgave1/Design";
import Programming from "./oppgave1/Programming";
import Support from "./oppgave1/Support";
import Oppgave2 from "./oppgave2/Oppgave2";

//theme provider to controll responsive mainly
import {ThemeProvider} from 'styled-components';


const theme = {
    desktop: '768px',
    home: {
      bg: 'red',
      boxWidth: '200px',
      boxHeight: '200px',
    },
    card: {
      nav: 'white',
      contentStrong:  'hsla(0,60%,60%,.5);',
      contentLight: 'hsla(120,60%,60%,.3)',
    },
}
function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div className="App">
      <Switch>
      <Route path='/' element={<Home/>}/>
      <Route path='/oppgave1' element={<Oppgave1/>} />
      <Route path='/oppgave2' element={<Oppgave2/>} />
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
