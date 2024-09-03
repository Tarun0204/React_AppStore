import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTab(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
