import { Suspense, useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Suspense fallback="loading...">
				<hello-world count={count} />
			</Suspense>
    </>
  )
}

export default App
