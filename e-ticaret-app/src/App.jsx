import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './component/Header'
import ProductList from './component/ProductList'

function App() {

  return (
    <div>
      <PageContainer>
        <Header />
        <ProductList />
      </PageContainer>
    </div>
  )
}

export default App
