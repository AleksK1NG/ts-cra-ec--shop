import React from 'react'
import { connect } from 'react-redux'
import './HomePage.styles.scss'

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <h1 className="home">Home page 12</h1>
    </div>
  )
}

export default connect(
  null,
  {}
)(HomePage)
