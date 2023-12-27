import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div>
      
      <NavBar />
      
      <ItemListContainer greeting="Hello & welcome to Geekland, we are very happy you are here" />

    </div>
  )
}

export default App