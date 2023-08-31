import {Component} from 'react'
import './index.css'
import SlideContext from '../../Context'

class SlideItem extends Component {
  render() {
    const {details, serialNumber} = this.props
    const {heading, description} = details

    return (
      <SlideContext.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === serialNumber - 1
          const isActiveStyle = isActive ? 'active-style' : ''

          const onClickSlideTab = () => {
            changeActiveTab(serialNumber - 1)
          }

          return (
            <li
              className={`slide-list-item ${isActiveStyle}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNumber}`}
            >
              <p className="slide-num">{serialNumber}</p>
              <div className="slide-tab">
                <h1 className="tab-head">{heading}</h1>
                <p className="tab-info">{description}</p>
              </div>
            </li>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default SlideItem
