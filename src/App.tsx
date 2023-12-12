import { Route, Routes } from 'react-router-dom';

import './App.css'

import Layout from './Layout';

import { Home, About, Portfolio,
         Clothing4U, Clone, PleaseBuy, PickMovie, BoostupCE60,
         KnightJourney, Tertis, TicTacToe, VocabGame } from './pages';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/Clothing4U' element={<Clothing4U />} />
        <Route path='/portfolio/Clone' element={<Clone />} />
        <Route path='/portfolio/PleaseBuy' element={<PleaseBuy />} />
        <Route path='/portfolio/PickMovie' element={<PickMovie />} />
        <Route path='/portfolio/BoostupCE60' element={<BoostupCE60 />} />
        <Route path='/portfolio/Knight-Journey' element={<KnightJourney />} />
        <Route path='/portfolio/Tertis' element={<Tertis />} />
        <Route path='/portfolio/Tic-Tac-Toe' element={<TicTacToe />} />
        <Route path='/portfolio/Vocab-Game' element={<VocabGame />} />
      </Route>
    </Routes>
  )
}

export default App
