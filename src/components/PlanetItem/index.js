// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div data-testid="planets" className="bg">
      <div data-testid="planets">
        <img src={imageUrl} alt={`planet ${name}`} className="image" />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default PlanetItem
