import {Component} from 'react'
import BrowserItem from '../BrowserItem'
import './index.css'

// These are the list used in the application. You can move them to any component needed.

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    duplicateHistoryList: initialHistoryList,
    isEmptyHistory: false,
  }

  onChangeSearchInput = event => {
    // console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    // console.log(`Delete Item ${id}`)
    const {duplicateHistoryList} = this.state

    const filteredHistoryList = duplicateHistoryList.filter(
      eachHistory => eachHistory.id !== id,
    )

    if (filteredHistoryList.length === 0) {
      this.setState({isEmptyHistory: true})
    } else {
      this.setState({duplicateHistoryList: filteredHistoryList})
    }
  }

  render() {
    const {searchInput, isEmptyHistory, duplicateHistoryList} = this.state
    // console.log(duplicateHistoryList)
    // console.log(isEmptyHistory)
    const searchResultList = duplicateHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="header-container">
            <img
              className="history-app-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="input-container">
              <div className="image-container">
                <img
                  className="search-image"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <input
                type="search"
                className="input-element"
                placeholder="Search History"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="content-container">
            <ul className="browser-history-container">
              {isEmptyHistory && (
                <p className="empty-history-view">
                  There is no history to show
                </p>
              )}
              {searchResultList.length === 0 && (
                <p className="empty-history-view">
                  There is no history to show
                </p>
              )}
              {!isEmptyHistory &&
                searchResultList.length !== 0 &&
                searchResultList.map(eachHistory => (
                  <BrowserItem
                    searchDetails={eachHistory}
                    key={eachHistory.id}
                    onDeleteHistory={this.onDeleteHistory}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
