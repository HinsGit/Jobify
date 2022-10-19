import { Landing,Error, Register } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute.js';
import {
  Alljobs,
  Addjob,
  Profile,
  Stats,
  SharedLayout
} from './pages/dashboard'

  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<ProtectedRoute><SharedLayout/></ProtectedRoute>}>
          <Route index element = {<Stats></Stats>}></Route>
          <Route path = "add-job" element = {<Addjob></Addjob>}></Route>
          <Route path = "all-jobs" element = {<Alljobs></Alljobs>}></Route>
          <Route path = "profile" element = {<Profile></Profile>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error></Error>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
