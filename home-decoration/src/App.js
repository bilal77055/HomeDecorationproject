import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Maincomponent from './Maincomponent'
import Details from './Components/Details'
import { AppProvider } from './Content';
import Cartdata from './Components/Cartdata';
  
const App = () => {
  return (
    <div>

  <AppProvider>
<Routes>
<Route path='/' element={<Maincomponent />} />
<Route path='/details'  element={<Details />}/>
<Route path='/cartdata' element={<Cartdata />} />
</Routes>
</AppProvider>
    </div>
  )
}

export default App
