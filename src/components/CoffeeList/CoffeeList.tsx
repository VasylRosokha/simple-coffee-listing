import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './CoffeeList.css'

interface Coffee {
  id: number
  available: boolean
  image: string
  name: string
  popular: boolean
  price: string
  rating: number
  votes: number
}

interface CoffeeListProps {
  filter: 'all' | 'available'
}

const CoffeeList = ({ filter }: CoffeeListProps) => {
  const [coffeeData, setCoffeeData] = useState<Coffee[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data: Coffee[]) => {
        setCoffeeData(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading coffee list ...</div>
  if (error) return <div>Error: {error}</div>

  const filteredData =
    filter === 'available'
      ? coffeeData.filter((coffee) => coffee.available)
      : coffeeData

  return (
    <div className="coffee-list">
      {filteredData.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )
}

export default CoffeeList
