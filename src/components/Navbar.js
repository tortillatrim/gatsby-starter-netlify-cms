import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-small.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className={`navbar ${this.props.className}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Hjem | Hjertekrøll">
              <img src={logo} alt="Hjem | Hjertekrøll"/>
              <span className="mx-3 is-size-4 has-text-weight-semibold">Hjertekrøll</span>
            </Link>
            {/* Hamburger menu */}
            <button type="button"
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered is-align-content-center">
              <Link className="navbar-item is-tab" to="/eq-terapi" partiallyActive={true} activeClassName="is-active">
                EQ-Terapi
              </Link>
              <Link className="navbar-item is-tab" to="/kompetanse" partiallyActive={true} activeClassName="is-active">
                Nettkurs
              </Link>
              {/* <Link className="navbar-item is-tab" to="/about" activeClassName="is-active">
                Om oss
              </Link> */}
              <Link className="navbar-item is-tab" to="/contact" activeClassName="is-active">
                Kontakt
              </Link>

            </div>
            <div className="navbar-end has-text-centered my-3">
                <Link to="/eq-terapi/bestill-time" className="button is-primary is-medium"><i className="material-icons pr-3">book_online</i> Bestill time</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
