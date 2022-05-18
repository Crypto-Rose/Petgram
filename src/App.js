import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import ListOfPhotoCard from './components/ListOfPhotoCard'
import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard />
    </div>
  )
}

export default App
