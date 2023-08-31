import {Component} from 'react'
import './index.css'
import SlideContext from '../../Context'

class Slide extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickHead = () => {
    this.setState({headingActive: false})
  }

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state
    return (
      <SlideContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            ChangeDescription,
          } = value

          const onBlurDescription = event => {
            if (event.target.value === '') {
              ChangeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onChangeHead = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            ChangeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-display-cont">
              <div className="slide-cont">
                {headingActive ? (
                  <h1 onClick={this.onClickHead} className="slide-head">
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHead}
                    onBlur={onBlurHeading}
                    className="slide-head-input"
                  />
                )}
                {descriptionActive ? (
                  <p
                    onClick={this.onClickDescription}
                    className="slide-description"
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    className="slide-description-input"
                    onBlur={onBlurDescription}
                  />
                )}
              </div>
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Slide
