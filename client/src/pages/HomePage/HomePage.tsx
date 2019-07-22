import React from 'react'
import { connect } from 'react-redux'
import './HomePage.styles.scss'

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="home">Home page 1</h1>
    </div>
  )
}

export default connect(
  null,
  {}
)(HomePage)
