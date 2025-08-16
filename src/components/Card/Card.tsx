import './Card.css'

export interface Coffee {
  id: number
  available: boolean
  image: string
  name: string
  popular: boolean
  price: string
  rating: number
  votes: number
}

interface CardProps {
  coffee: Coffee
}

const Card = ({ coffee }: CardProps) => {
  return (
    <div className="coffee-card">
      <div className="image-wrapper">
        <img src={coffee.image} alt={coffee.name} />
        {coffee.popular && <span className="tag">Popular</span>}
      </div>

      <div className="info">
        <div className="name-price">
          <h3>{coffee.name}</h3>
          <p className="price">{coffee.price}</p>
        </div>

        <div className="rating">
          <div className="rating-votes">
            <span>⭐ {coffee.rating}</span>

            <span className="votes">({coffee.votes} votes)</span>
          </div>
          {!coffee.available && <span className="sold-out">Sold Out</span>}
        </div>
      </div>
    </div>
  )
}

export default Card
