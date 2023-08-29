import {Component} from 'react'
import './index.css'

class RandomImage extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {thumbId: ''}

  render() {
    const {imagesList, item} = this.props
    return (
      <img
        src={imagesList[item].thumbnailUrl}
        className="thumbnailImage"
        alt="match"
      />
    )
  }
}

export default RandomImage
