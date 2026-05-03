import axios from 'axios';
import React, { useEffect } from 'react'; // useEffect ko import karna zaroori hai
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Photo from './pages/photo';
import PhotoAdd from './pages/photoAdd';
const App = () => {

  async function getData() {
    try {
      const res = await axios.get('http://localhost:3000/notes');
      console.log(res.data.data); // Aapka data yahan print hoga
    } catch (error) {
      console.log("Error aayi bhai:", error);
    }
  }

  // useEffect ensure karega ki function sirf ek baar call ho (jab page load ho)
  useEffect(() => {
    getData();
  }, []); // Ye khali array [] lagana bahut zaroori hai

  return (<>
    <div>App</div>
    <Routes>
      <Route path='/photo' element={<Photo />} />
      <Route path='/photoadd' element={<PhotoAdd />} />

    </Routes>

  </>
  )
}

export default App;