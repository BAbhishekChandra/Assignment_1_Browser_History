import './index.css'

const BrowserItem = props => {
  const {searchDetails, onDeleteHistory} = props
  // console.log(searchDetails)
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails
  // console.log(id, timeAccessed, logoUrl, title, domainUrl)

  const onDelete = () => {
    // console.log(id)
    onDeleteHistory(id)
  }

  return (
    <li className="list-item-container">
      <div className="inner-container">
        <p className="time-element">{timeAccessed}</p>
        <img className="logo-element" src={logoUrl} alt="domain logo" />
        <p className="title-element">{title}</p>
        <p className="domain-element">{domainUrl}</p>
      </div>

      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserItem
