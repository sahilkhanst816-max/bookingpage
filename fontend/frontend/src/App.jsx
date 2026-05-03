import { Routes } from 'react-router';
import { Route } from 'react-router';
import Photo from './pages/photo';
import PhotoAdd from './pages/photoAdd';
const App = () => {
  return (<>
    <div>App</div>
    <Routes>
      <Route path='/' element={<PhotoAdd />} />
      <Route path='/photo' element={<Photo />} />
      <Route path='/photoadd' element={<PhotoAdd />} />
    </Routes>
  </>
  )
}

export default App;
