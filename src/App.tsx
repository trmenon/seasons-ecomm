import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Pages Imports
import { NavbarComponent } from './components';
import { HomePage, ShopPage, AuthPage } from './pages';

const App = ()=> {
  return(
    <Routes>
      <Route path= '/' element={<NavbarComponent/>}>
        <Route index element={<HomePage/>}/>
        <Route path='auth' element={<AuthPage/>}/>
        <Route path='shop' element={<ShopPage/>}/>
      </Route>
    </Routes>    
  )
}

export default App;
