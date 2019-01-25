import React, { Component } from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     hasScrolled: false,
  //   }
  // }
  state = { hasScrolled: false }

  handleScroll = e => {
    const scrollTop = window.pageYOffset
    // console.log('Scrolled')
    scrollTop > 50
      ? this.setState({ hasScrolled: true })
      : this.setState({ hasScrolled: false })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require('../images/logo-designcode.svg')} width="30" />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header

// const Header = ({ siteTitle }) => (
//   <div className="Header">
//     <div className="HeaderGroup">
//       <Link to="/">
//         <img src={require('../images/logo-designcode.svg')} width="30" />
//       </Link>
//       <Link to="/courses">Courses</Link>
//       <Link to="/downloads">Downloads</Link>
//       <Link to="/workshops">Workshops</Link>
//       <Link to="/buy">
//         <button>Buy</button>
//       </Link>
//     </div>
//   </div>
// )

// export default Header
