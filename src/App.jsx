import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import Flag1 from './Pages/Flag1';
import Flag2 from './Pages/Flag2';
import Flag3 from './Pages/Flag3';

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/page1" element={<Flag1 />}  />
        <Route path="/page2" element={<Flag2 />}  />
        <Route path="/page3" element={<Flag3 />}  />
      </Routes>
    </Router>
      </>
  )
}

export default App
