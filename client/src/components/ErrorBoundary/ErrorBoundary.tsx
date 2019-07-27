import React from 'react'

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundary.styles'

class ErrorBoundary extends React.Component<{}, {}> {
  state = {
    hasErrored: false
  }

  static getDerivedStateFromError(error: any) {
    // process the error
    return { hasErrored: true }
  }

  componentDidCatch(error: any, info: any) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
