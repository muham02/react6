
import './App.css'
import AllPage from './components/allPage/AllPage'
import NotFound from './components/notFound/NotFound'
import { SinglePage } from './components/singlePage/SinglePage'
import {Routes,Route} from "react-router-dom"
function App() {

  return (
 <>
 
 <Routes>
  <Route path="/"element={<AllPage/>}/>
  <Route path="/single/:id"element={<SinglePage/>}/>
  <Route path="*"element={<NotFound/>}/>

 </Routes>
 </>
  )
}

export default App
