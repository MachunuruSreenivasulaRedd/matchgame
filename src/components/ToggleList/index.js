import {Component} from 'react'
import ImageItem from '../ImageItem'
import './index.css'

class ToggleList extends Component {
  state = {
    isFruits: true,
    isAnimals: false,
  }

  checkClickedItem = () => {
    const {changeScore} = this.props
    changeScore()
  }

  renderPhotos = () => {
    const {isFruits, isAnimals} = this.state
    const {
      fruitsList,
      animalsList,
      placesList,
      thumbId,
      scoreCardView,
    } = this.props
    if (isFruits) {
      return (
        <ul className="list">
          {fruitsList.map(eachItem => (
            <ImageItem
              item={eachItem}
              key={eachItem.id}
              checkClickedItem={this.checkClickedItem}
              thumbId={thumbId}
              scoreCardView={scoreCardView}
            />
          ))}
        </ul>
      )
    }
    if (isAnimals) {
      return (
        <ul className="list">
          {animalsList.map(eachItem => (
            <ImageItem
              item={eachItem}
              key={eachItem.id}
              checkClickedItem={this.checkClickedItem}
              thumbId={thumbId}
            />
          ))}
        </ul>
      )
    }
    return (
      <ul className="list">
        {placesList.map(eachItem => (
          <ImageItem
            item={eachItem}
            key={eachItem.id}
            checkClickedItem={this.checkClickedItem}
            thumbId={thumbId}
          />
        ))}
      </ul>
    )
  }

  displayFruits = () => {
    this.setState({isFruits: true, isAnimals: false})
  }

  displayAnimals = () => {
    this.setState({isFruits: false, isAnimals: true})
  }

  displayPlaces = () => {
    this.setState({isFruits: false, isAnimals: false})
  }

  render() {
    return (
      <>
        <div className="tabSelectionContainer">
          <li>
            <button
              type="button"
              onClick={this.displayFruits}
              className="btn active"
            >
              Fruits
            </button>
          </li>
          <li>
            <button type="button" onClick={this.displayAnimals} className="btn">
              Animals
            </button>
          </li>
          <li>
            <button type="button" onClick={this.displayPlaces} className="btn">
              Places
            </button>
          </li>
        </div>
        <div className="GalleryContainer">{this.renderPhotos()}</div>
      </>
    )
  }
}

export default ToggleList
