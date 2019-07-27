import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './Spinner.styles'

const Spinner: React.FC = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

export default Spinner
