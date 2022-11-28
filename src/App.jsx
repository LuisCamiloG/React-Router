import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PaginaPrincipal from './Componentes/Pagina/PaginaPrincipal'
import AdaLovelace from './Componentes/Personajes/AdaLovelace'
import BillGates from './Componentes/Personajes/BillGates'
import GraceHopper from './Componentes/Personajes/GraceHopper'
import MarkZuckerberg from './Componentes/Personajes/MarkZuckerberg'
import StevenWozniak from './Componentes/Personajes/StevenWozniak'

function App() {

  return (
    <BrowserRouter>
      <PaginaPrincipal />
      <Routes>
        <Route path='/' element="" />
        <Route path='/BillGates' element={<BillGates />} />
        <Route path='/AdaLovelace' element={<AdaLovelace />} />
        <Route path='/StevenWozniak' element={<StevenWozniak />} />
        <Route path='/GraceHopper' element={<GraceHopper />} />
        <Route path='/MarkZuckerberg' element={<MarkZuckerberg />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

