import './index.css'

const ImageItem = props => {
  const {item, thumbId} = props
  const {id} = item
  const sendIdOfClickedItem = () => {
    const {checkClickedItem, showScoreCard} = props
    if (thumbId === id) {
      checkClickedItem()
    } else {
      showScoreCard()
    }
  }

  return (
    <li className="images-list">
      <button type="button" className="ImageBtn" onClick={sendIdOfClickedItem}>
        <img src={item.thumbnailUrl} alt="thumbnail" className="img" />
      </button>
    </li>
  )
}

export default ImageItem
