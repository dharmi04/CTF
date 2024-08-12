import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import Flag1 from './Pages/Flag1';
import Flag2 from './Pages/Flag2';
import Flag3 from './Pages/Flag3';
import Flag4 from './Pages/Flag4';
import Flag5 from './Pages/Flag5';

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/ZmxhZ3sxbjdyMWM0NzNfNGxsX3RoM19kuyer67i/page1" element={<Flag1 />}  />
        <Route path="/ZmxhZ3sxbjdyMWM0NzNfNGxsX3RoM19kNHQu/page2" element={<Flag2 />}  />
        <Route path="/ZmxhZ3sxbjdyMWM0NzNfNGxsX3RoM19kNHQ0fQo=/page3" element={<Flag3 />}  />
        <Route path="/ZmxhZ3sxbjdyMWM0NzNfNGxsX3RoM19kuwueyig/page4" element={<Flag4 />}  />
        <Route path="/ZmxhZ3sxbjdyMWM0NzNfNGxsX3RoM19kNH678oieuyhgvbd/page5" element={<Flag5 />}  />
      </Routes>
    </Router>
      </>
  )
}

export default App