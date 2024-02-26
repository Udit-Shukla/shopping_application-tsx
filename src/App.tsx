import { Route, Routes } from 'react-router-dom'
import './App.css'
import CardList from './Components/CardList'
import Header from './Components/Header'
import ProductDetail from './Components/ProductDetail'


function App() {
  return (
     <div>
      <Header />
      <h2>KDU MARKETPLACE</h2>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </div>
    
  )
}

export default App
