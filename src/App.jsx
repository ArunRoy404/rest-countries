import { Suspense } from 'react'
import './App.css'
import { ErrorBoundary } from "react-error-boundary"
import Countries from './components/Countries'


const countriesPromise = async () => {
  const url = 'https://restcountries.com/v3.1/all'
  const response = await fetch(url)
  return response.json()
}

function App() {
  const fetchCountries = countriesPromise()

  return (
    <>
      <h1 className='text-5xl font-bold' >Visit Countries</h1>
      <div className='border-2 mt-4 p-5'>
        <ErrorBoundary fallback={<h2 className='text-2xl font-bold'>Something Went Wrong!</h2>}>
          <Suspense fallback={<h2 className='text-2xl font-bold'>Countries Loading..........</h2>}>
            <Countries fetchCountries={fetchCountries}></Countries>
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default App