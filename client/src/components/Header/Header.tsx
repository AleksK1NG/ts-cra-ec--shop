import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './Header.styles.scss'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { userSelector } from '../../store/modules/auth/authSelectors'
import { IUser } from '../../models/models'
import { logoutRequest } from '../../store/modules/auth/authActions'
import { showCartIconSelector } from '../../store/modules/UI/uiSelectors'
import CartDropdown from '../Cart/CartDropdown/CartDropdown'
import CartIcon from '../Cart/CartIcon/CartIcon'

interface IProps {
  user: IUser | null
  logoutRequest: () => void
  hidden: boolean
}

const Header: React.FC<IProps> = ({ user, logoutRequest, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {user && user.email}
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {user ? (
          <div style={{ cursor: 'pointer' }} className="option" onClick={logoutRequest}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

export default connect(
  (state: AppState) => ({
    user: userSelector(state),
    hidden: showCartIconSelector(state)
  }),
  { logoutRequest }
)(Header)
