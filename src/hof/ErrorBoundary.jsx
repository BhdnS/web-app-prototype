import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = () => {
      setHasError(true)
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleError)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleError)
    }
  }, [])

  if (hasError) {
    return <Alert variant='danger'>An unexpected error occurred.</Alert>
  }

  return children
}

export default ErrorBoundary
