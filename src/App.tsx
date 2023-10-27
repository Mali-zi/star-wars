import './App.css';
import TopSection from './components/TopSection';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <TopSection />
    </ErrorBoundary>
  );
}

export default App;
