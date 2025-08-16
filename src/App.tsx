import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import CoffeeList from './components/CoffeeList/CoffeeList'

function App() {
  const [filter, setFilter] = useState<'all' | 'available'>('all')
  return (
    <div className="App">
      <div className="bg-image"></div>
      <div className="container">
        <div className="header">
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="buttons">
          <Button
            text="All products"
            isActive={filter === 'all'}
            onClick={() => setFilter('all')}
          />
          <Button
            text="Available now"
            isActive={filter === 'available'}
            onClick={() => setFilter('available')}
          />
        </div>
        <CoffeeList filter={filter} />
      </div>
    </div>
  )
}

export default App
