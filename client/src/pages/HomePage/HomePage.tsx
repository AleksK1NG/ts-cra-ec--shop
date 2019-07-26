import React from 'react'
import { connect } from 'react-redux'
import Directory from '../../components/Directory/Directory'

import { HomePageContainer } from './HomePage.styles'

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

export default connect(
  null,
  {}
)(HomePage)
