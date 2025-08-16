import './Button.css'

type ButtonProps = {
  text: string
  isActive: boolean
  onClick: () => void
}

const Button = ({ text, isActive, onClick }: ButtonProps) => {
  return (
    <button className={`button ${isActive ? 'active' : ''}`} onClick={onClick}>
      {' '}
      {text}
    </button>
  )
}

export default Button
