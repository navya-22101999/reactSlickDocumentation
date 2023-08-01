// Write your code here
import Slider from 'react-slick'
import PLanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const setting = {
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  return (
    <>
      <div data-testid="planets" className="bg">
        <div data-testid="planets" className="bg">
          <h1>PLANETS</h1>
          <Slider {...setting}>
            {planetsList.map(each => (
              <PLanetItem key={each.id} planetDetails={each} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
export default PlanetsSlider
