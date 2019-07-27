import React from 'react'
import Spinner from '../../Spinner/Spinner'

interface WithLoadingProps {
  isLoading: boolean
}

const WithSpinner = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P & WithLoadingProps> => ({
  isLoading,
  ...otherProps
}: WithLoadingProps) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...(otherProps as P)} />
}

export default WithSpinner

// https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
