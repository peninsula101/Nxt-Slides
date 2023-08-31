import {Component} from 'react'
import SlideItem from '../SlideItem'
import SlideContext from '../../Context'
import Slide from '../Slide'
import './index.css'

class Slides extends Component {
  render() {
    return (
      <SlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-cont">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Slides
