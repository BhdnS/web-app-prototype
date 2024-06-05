import Layout from './components/Layout.jsx'
import ErrorBoundary from './hof/ErrorBoundary.jsx'

const App = () => {
  return (
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  )
}

export default App
