import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { userSelector } from '../../store/modules/auth/authSelectors'
import { IUser } from '../../models/models'
import { logoutRequest } from '../../store/modules/auth/authActions'
import { showCartIconSelector } from '../../store/modules/UI/uiSelectors'
import CartDropdown from '../Cart/CartDropdown/CartDropdown'
import CartIcon from '../Cart/CartIcon/CartIcon'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionLinkSignOut } from './Header.styles'

interface IProps {
  user: IUser | null
  logoutRequest: () => void
  hidden: boolean
}

const Header: React.FC<IProps> = ({ user, logoutRequest, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        {user && user.email}
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {user ? (
          <OptionLinkSignOut as="div" onClick={logoutRequest}>
            SIGN OUT
          </OptionLinkSignOut>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

export default connect(
  (state: AppState) => ({
    user: userSelector(state),
    hidden: showCartIconSelector(state)
  }),
  { logoutRequest }
)(Header)
