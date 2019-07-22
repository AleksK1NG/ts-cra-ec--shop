import React from 'react'
import { connect } from 'react-redux'
import './HomePage.styles.scss'
import Directory from '../../components/Directory/Directory'

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default connect(
  null,
  {}
)(HomePage)
